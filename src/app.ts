import express, {
  type Application,
  type Request,
  type Response,
} from "express";
import { pool } from "./db";
import { userRouter } from "./modules/user/user.route";
const app: Application = express();

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "This is express js server",
    developer: "M. H. Mahbub",
  });
});

app.use("/api/users", userRouter);

export default app;
