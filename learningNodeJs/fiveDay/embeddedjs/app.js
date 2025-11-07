const express = require("express");
const PORT = 3000;
const app = express();

// set ejs has the view engine
app.set("view engine", "ejs");

//serve static files
// app.use(express.static("public"));
// example

app.get("/index", (req, res) => {
  const user = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 22 },
  ];
  res.render("index", { title: "Home Page", user });
});
app.listen(PORT, () => {
  console.log(`server running on the PORT ${PORT}`);
});
