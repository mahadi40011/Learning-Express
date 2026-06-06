import express, {
  type Application,
  type Request,
  type Response,
} from "express";
import { userRouter } from "./modules/user/user.route";
import { profileRouter } from "./modules/profile/profile.route";
import { authRouter } from "./modules/auth/auth.route";
import fs from "fs";

const app: Application = express();

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  const log = `\nMethod --> ${req.method}, URL --> ${req.url}, Time --> ${Date.now()}\n`;
  fs.appendFile("logger.txt", log, (error) => {
    console.log(error);
  });
  next();
});

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "This is express js server",
    developer: "M. H. Mahbub",
  });
});

app.use("/api/users", userRouter);
app.use("/api/profile", profileRouter);
app.use("/api/auth", authRouter);

export default app;
