const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.status(404).send({
    error: "Page Not Found",
    name: "Todo App v1.0"
  });
});

app.get("/users", (req, res) => {
  res
    .status(200)
    .send([
      { name: "Tom", age: 21 },
      { name: "Peter", age: 27 },
      { name: "John", age: 23 }
    ]);
  //obj user give users a name/age create 3 users
  //make new test
  //assert status code is 200
  //inside array user obj exists
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});

module.exports.app = app;
