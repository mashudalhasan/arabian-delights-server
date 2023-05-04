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

app.get("/chefsInfo/:id", (req, res) => {
  const id = parseInt(req.params.id);

  if (id === 0) {
    res.send(chefsInfo);
  } else {
    const chefDetails = chefsInfo.find((chef) => chef.id === id);
    res.send(chefDetails);
  }
});

app.get("/recipesInfo/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const recipeDetails = recipesInfo.filter(
    (recipe) => recipe.category_id === id
  );
  res.send(recipeDetails);
});

app.listen(port, () => {
  console.log(`chef recipe hunter API is running on port ${port}`);
});
