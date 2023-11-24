import express from "express";
import morgan from "morgan";
import globalRouter from "./src/routers/globalRouter";
import storyRouter from "./src/routers/storyRouter";
import userRouter from "./src/routers/userRouter";

const app = express();
const logger = morgan("dev");

app.use(logger);

app.use("/", globalRouter);
app.use("/users", userRouter);
app.use("/stories", storyRouter);

const handleListening = () => console.log("Server Listening");
app.listen(3000, handleListening);
