import type { NextFunction, Request, Response } from "express";
import fs from "fs";

const logger = (req: Request, res: Response, next: NextFunction) => {
  const log = `\nMethod --> ${req.method}, Time --> ${Date.now()}, URL --> ${req.url}\n`;
  fs.appendFile("logger.txt", log, (error) => {
    console.log(error);
  });
  next();
};

export default logger;
