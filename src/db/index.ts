import { Pool } from "pg";
import config from "../config/env";

export const pool = new Pool({
  connectionString: config.connection_string,
});

export const initDB = async () => {
  try {
    await pool.query(`
    CREATE TABLE IF NOT EXISTS users(
      id SERIAL PRIMARY KEY,

      name VARCHAR(30),
      email VARCHAR(30) UNIQUE NOT NULL,
      password VARCHAR(20) NOT NULL,
      is_active BOOLEAN DEFAULT true,
      age INT,

      created_at TIMESTAMP NOT NULL DEFAULT NOW(),
      updated_at TIMESTAMP NOT NULL DEFAULT NOW()
    )`);

    await pool.query(`
    CREATE TABLE IF NOT EXISTS profiles(
      id SERIAL PRIMARY KEY,
      user_id INT NOT NULL UNIQUE REFERENCES users(id) ON DELETE CASCADE,

      bio TEXT,
      address TEXT,
      phone VARCHAR(15),
      gender VARCHAR(10),
      
      created_at TIMESTAMP NOT NULL DEFAULT NOW(),
      updated_at TIMESTAMP NOT NULL DEFAULT NOW()
    )`);

    console.log("Database Connected Successfully");
  } catch (error) {
    console.log(error);
  }
};
