const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());

const chefsInfo = require("./data/chefsInfo.json");
const recipesInfo = require("./data/recipesInfo.json");

app.get("/", (req, res) => {
  res.send("Chef is hunting");
});

app.get("/chefsInfo", (req, res) => {
  res.send(chefsInfo);
});

app.get("/recipesInfo", (req, res) => {
  res.send(recipesInfo);
});

app.listen(port, () => {
  console.log(`chef recipe hunter API is running on port ${port}`);
});
