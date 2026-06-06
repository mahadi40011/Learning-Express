import bcrypt from "bcryptjs";
import { pool } from "../../db";
import jwt from "jsonwebtoken";
import config from "../../config/env";

const loginUserIntoDB = async (payload: {
  email: string;
  password: string;
}) => {
  const { password, email } = payload;
  const userData = await pool.query(`SELECT * FROM users WHERE email=$1`, [
    email,
  ]);
  if (userData.rows.length === 0) {
    throw new Error("Invalid Credential!");
  }

  const user = userData.rows[0];
  const matchPassword = await bcrypt.compare(password, user?.password);
  if (!matchPassword) {
    throw new Error("Invalid Password");
  }

  // Generate JWT token
  const jwtPayload = {
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
    is_active: user.is_active,
  };

  const accessToken = jwt.sign(jwtPayload, config.jwt_secret as string, {
    expiresIn: "1d",
  });
  return { accessToken };
};

export const authService = {
  loginUserIntoDB,
};
