import express, { json } from "express";
import config from "./config.json" assert { type: "json" };

const app = express();
const port = config.port;

app.listen(port, () => {
  console.log(`Express app is working in localhost:${port}/`);
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});
