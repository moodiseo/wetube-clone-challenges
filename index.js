import express from "express";
const app = express();
const handleListening = () => console.log("Server Listening");

app.listen(3000, handleListening);

const globalRouter = express.Router();
const aboutRouter = express.Router();
const contactRouter = express.Router();
const loginRouter = express.Router();

const handleHome = (req, res) => {
  return res.send("handleHome");
};
const handleAbout = (req, res) => {
  return res.send("handleAbout");
};
const handleContact = (req, res) => {
  return res.send("handleContact");
};
const handleLogin = (req, res) => {
  return res.send("handleLogin");
};

app.get("/", handleHome);
app.get("/about", handleAbout);
app.get("/contact", handleContact);
app.get("/login", handleLogin);

app.use("/", globalRouter);
app.use("/about", aboutRouter);
app.use("/contact", contactRouter);
app.use("/login", loginRouter);
