import { Router, type Request, type Response } from "express";
import { pool } from "../../db";

const router = Router();

router.post("/", async (req: Request, res: Response) => {
  const { name, email, password, age } = req.body;
  try {
    const result = await pool.query(
      `
    INSERT INTO users(name, email, password, age) VALUES($1, $2, $3, $4)   RETURNING *
    `,
      [name, email, password, age],
    );

    res.status(201).json({
      success: true,
      message: "User Created Successfully",
      data: result.rows[0],
    });
  } catch (error: any) {
    res.status(409).json({
      success: false,
      message: error.message,
      data: error,
    });
  }
});

export const userRouter = router;
