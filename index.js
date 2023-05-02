const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Chef is hunting");
});

app.listen(port, () => {
  console.log(`chef recipe hunter API is running on port ${port}`);
});
