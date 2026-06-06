import type { NextFunction, Request, Response } from "express";
import fs from "fs";

const loggerMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const log = `Method --> ${req.method}, Time --> ${Date.now()}, URL --> ${req.url}\n`;
  fs.appendFile("logger.txt", log, (error) => {
    console.log(error);
  });
  next();
};

export default loggerMiddleware;
