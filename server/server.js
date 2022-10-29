import express, { json } from "express";
import config from "./config.json" assert { type: "json" };

const app = express();
const port = config.port;

app.listen(port, () => {
  console.log(`Express app is working at https://localhost:${port}`);
});

app.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});

app.get("/api/spendings/", (req, res) => {
  res.status(200).send("Get all spendings");
});

app.get("/api/spendings/:id", (req, res) => {
  res.status(200).send(`Get spending with id ${req.params.id}`);
});

app.post("/api/spendings/", (req, res) => {
  res.status(200).send("Add new spending");
});

app.patch("/api/spendings/:id"),
  (req, res) => {
    res.status(200).send(`Update spending with id ${req.params.id}`);
  };

app.delete("/api/spendings/:id"),
  (req, res) => {
    res.status(200).send(`Delete spending with id ${req.params.id}`);
  };
