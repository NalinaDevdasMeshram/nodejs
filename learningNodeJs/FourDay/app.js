const express = require("express");
const app = express();
const PORT = 3000;

// Basic route
app.get("/", (req, res) => res.send("Home Page"));
app.get("/about", (req, res) => res.send("About Page"));
app.post("/submit", (req, res) => res.send("Form Submitted!"));

app.listen(PORT, () => {
  console.log(`server on the port number ${PORT}`);
});
