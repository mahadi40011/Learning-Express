import bcrypt from "bcryptjs";
import { pool } from "../../db";

const loginUserIntoDB = async (payload: {
  email: string;
  password: string;
}) => {
  // check the user exist --> done
  // compare the password --> done
  // generate token
  const { password, email } = payload;
  const userData = await pool.query(`SELECT * FROM users WHERE email=$1`, [
    email,
  ]);
  if (userData.rows.length === 0) {
    throw new Error("Invalid Credential!")
  }

  const user = userData.rows[0]
  const matchPassword = bcrypt.compare(password, user?.password)
  if (!matchPassword) {
    throw new Error("Invalid Password");
  }

};

export const authService = {
  loginUserIntoDB,
};
