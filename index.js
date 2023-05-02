const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

const chefsInfo = require("./data/chefsInfo.json");

app.get("/", (req, res) => {
  res.send("Chef is hunting");
});

app.get("/chefsInfo", (req, res) => {
  res.send(chefsInfo);
});

app.listen(port, () => {
  console.log(`chef recipe hunter API is running on port ${port}`);
});
