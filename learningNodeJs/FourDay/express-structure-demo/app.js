const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// serve static files
app.use(express.static(path.join(__dirname, "public")));

// routing
const indexRoutes = require("./routes/index");
const userRoutes = require("./routes/users");

app.use("/", indexRoutes);
app.use("/users", userRoutes);
// error handling
app.use((err, req, res, next) => {
  console.error("error :", err.message);
  res.status(500).send("internal server error");
});
app.listen(PORT, () => {
  console.log(`server running on the PORT ${PORT}`);
});
