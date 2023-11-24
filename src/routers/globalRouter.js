import express from "express";
import { join, login } from "../controllers/userController";
import { home, trending, newStory } from "../controllers/storiesController";

const globalRouter = express.Router();

globalRouter.get("/", home);
globalRouter.get("/join", join);
globalRouter.get("/login", login);
globalRouter.get("/trending", trending);
globalRouter.get("/new", newStory);

export default globalRouter;
