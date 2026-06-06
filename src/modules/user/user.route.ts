import { Router } from "express";
import { userController } from "./user.controller";
import authMiddleware from "../../middleware/auth.middleware";

const router = Router();

router.post("/", userController.createUser);
router.get("/", authMiddleware(), userController.getAllUser);
router.get("/:id", userController.getSingleUser);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);

export const userRouter = router;
