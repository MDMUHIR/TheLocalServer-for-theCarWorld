const express = require("express");
const cors = require("cors");
const app = express();

// const ingredients = [
//   {
//     id: "1",
//     item: "Bacon",
//   },
//   {
//     id: "2",
//     item: "Eggs",
//   },
//   {
//     id: "3",
//     item: "Milk",
//   },
//   {
//     id: "4",
//     item: "Butter",
//   },
// ];
const data = require("./data.json");

app.use(cors());

app.get("/items", (req, res, next) => {
  res.send(data);
});
// app.get("/ingredients", (req, res) => {
//   res.send(ingredients);
// });

app.get("/item/:id", function (req, res, next) {
  let item = data.find((item) => item.id == req.params.id);
  res.send({
    ...item,
    description:
      "One of the most famous and luxurious car in the planet mars.",
  });
});

app.get("/search/:keyword?", function (req, res, next) {
  if (req.params.keyword) {
    var results = data.filter(
      (item) =>
        item.title.toLowerCase().indexOf(req.params.keyword.toLowerCase()) !== -1
    );
    res.send(results);
  }
  res.send(data);
});

app.listen(3000, function() {
  console.log('Web Server listening on port 3000')
});

