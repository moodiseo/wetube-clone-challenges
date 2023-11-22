import express from "express";
const app = express();

const urlLogger = (req, res, next) => {
  console.log("Path: ", req.path);
  next();
};
const timeLogger = (req, res, next) => {
  const date = new Date();
  console.log(
    `Time: ${date.getFullYear()}.${date.getMonth()}.${date.getDate()}`
  );
  next();
};
const securityLogger = (req, res, next) => {
  if (req.protocol === "https") {
    console.log("Secure");
  } else {
    console.log("Insecure");
  }
  next();
};
const protectorLogger = (req, res, next) => {
  if (req.path === "/protected") {
    return res.send("<h1>Forbidden<h1>");
  }
  next();
};
const handleHome = (req, res) => {
  return res.send("Home");
};
app.use(urlLogger, timeLogger, securityLogger, protectorLogger);
app.get("/", handleHome);

const handleListening = () => console.log("Server Listening");
app.listen(3000, handleListening);
