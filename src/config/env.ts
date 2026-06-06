import dotenv from "dotenv";
import path from "path";

dotenv.config({
  path: path.join(process.cwd(), ".env"),
});

const config = {
  connection_string: process.env.CONNECTIONSTRING as string,
  port: process.env.PORT,
  jwt_secret: process.env.JWT_ACCESS_TOKEN_SECRET,
  jwt_refresh_secret: process.env.JWT_REFRESH_TOKEN_SECRET,
};

export default config;
