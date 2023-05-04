const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const port = process.env.PORT || 5000;
app.get("/", (req, res) => {
  res.json({ hey: "something is running" });
});
const chefDetails = require("./data_file/chefs.json");
const recipeDetails = require("./data_file/recipe.json");

app.get("/chefData", (req, res) => {
  res.send(chefDetails);
});

app.get("/chefData/:id", (req, res) => {
  const id = req.params.id;
  const singleChef = chefDetails.find((chef) => chef.id === id);
  res.send(singleChef);
});

app.get("/recipeData", (req, res) => {
  res.send(recipeDetails);
});

app.listen(port, () => {
  console.log("server running");
});


