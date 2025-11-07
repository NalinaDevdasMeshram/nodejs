const express = require("express");
const app = express();
const PORT = 3000;
// server static files
app.use(express.static("public"));

app.listen(PORT, () => {
  console.log(`server running on the port ${PORT}`);
});
app.use(express.json()); // to parse json request body
app.post("/api/data", (req, res) => {
  const { name, age } = req.body;
  res.json({ message: `Recieved Data for ${name}, age ${age}` });
});
app.use(express.urlencoded({ extended: true }));

app.post("/submit", (req, res) => {
  const { username, email } = req.body;
  res.send(`Form Recieved : ${username} (${email})`);
});
