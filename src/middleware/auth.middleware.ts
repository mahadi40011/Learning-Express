import type { NextFunction, Request, Response } from "express";

const authMiddleware = () => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized Access",
      });
    }
    next();
  };
};

export default authMiddleware;
