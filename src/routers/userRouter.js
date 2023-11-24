import express from "express";
import { userSee, userHome, editProfile } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/", userHome);
userRouter.get("/:id(\\d+)", userSee);
userRouter.get("/edit-profile", editProfile);

export default userRouter;
