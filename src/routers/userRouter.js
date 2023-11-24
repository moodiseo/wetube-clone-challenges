import express from "express";
import { userSee, userHome } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/", userHome);
userRouter.get("/:id(\\d+)", userSee);

export default userRouter;
