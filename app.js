const express = require("express");
const app = express();
app.get("/", function (req, res) {
  res.send("Hello express js");
});
app.post("/login", function (req, res) {
  res.send("this is login page");
});
app.listen(4500);

// all in built function for backend will have global object which have all function

// function hello() {
//   console.log("hello");
// }

// setTimeout(1000, hello);

// module.exports.age = {
//   name: "xxx",
//   age: 25,
// };

// module.exports.name();
// {
//   console.log("my name is sheela");
// }
