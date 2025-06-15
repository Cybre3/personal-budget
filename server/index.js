require("dotenv").config();
const express = require("express");
const Mongoose = require("mongoose");

const app = express();

const port = process.env.PORT;
const server = app.listen(port, () =>
  console.log(`Listening on port ${port}...`)
);

const db = "mongodb://localhost/my-budget_test";

Mongoose.set("strictQuery", false);
Mongoose.connect(db).then(() => console.log(`connected to ${db}`));
