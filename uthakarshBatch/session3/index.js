const express = require("express");
const server = express();
const dotenv = require("dotenv");
dotenv.config();
//this command will load all the variables inside .env file in process.env
// process is a global vaiable
const PORT = process.env.PORT;
const HomeRouter = require("./routes/HomeRoutes");
const ActivityRoutes = require("./routes/ActivityRoutes");
const userData = require("./userData");
const { Authoriza } = require("./Middleware/Authorization");
const { default: mongoose } = require("mongoose");

server.use("/", HomeRouter);
// use allow the request like (get, post, patch, delete)

server.use("/api/v1/users", ActivityRoutes);
const databaseURL = "mongodb://localhost:27017";
mongoose
  .connect(databaseURL)
  .then(() => console.log("mongoDB Connected Successfully"))
  .catch((error) => console.error());
server.listen(PORT, () => {
  console.log(`server running on the PORT, ${PORT}`);
});
