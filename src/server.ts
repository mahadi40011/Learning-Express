import express, {
  type Application,
  type Request,
  type Response,
} from "express";
import { Pool } from "pg";
const app: Application = express();
const port = 5000;

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));

const pool = new Pool({
  connectionString:
    "postgresql://neondb_owner:npg_ZIrsDx2pb7HU@ep-morning-tooth-aqcfu15l.c-8.us-east-1.aws.neon.tech/neondb?sslmode=require",
});

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "This is root",
    developer: "M. H. Mahbub",
  });
});

app.post("/user", (req: Request, res: Response) => {
  const user = req.body;
  console.log(req.body);
  res.status(201).json({
    message: "User Created Successfully",
    data: user,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
