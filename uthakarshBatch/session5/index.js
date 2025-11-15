const express = require("express");
const server = express();
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT;
const HomeRouter = require("./Routes/HomeRoutes");
const { Authorize } = require("./Middleware/Authorization");
const userData = require("./userData");
const ActivityUserRoute = require("./Routes/AcitivityUserRoute");
const ActivityBlogRoute = require("./Routes/BlogRoute");
const ActivityAuthRoute = require("./Routes/AuthRoute");
const { default: mongoose } = require("mongoose");

server.use(express.json()); //is a built-in middleware in Express that automatically parses incoming JSON data from the request body.
server.use("/", HomeRouter);
server.use("/api/v1/users/", Authorize, ActivityUserRoute);
server.use("/api/v1/blogs", ActivityBlogRoute);
server.use("/api/v1/auth", ActivityAuthRoute);
const databaseURL =
  process.env.DB_URL + ":" + process.env.DB_PORT + "/myDatabase";

mongoose
  .connect(databaseURL)
  .then(() => console.log("MONGODB connect successfully"))
  .catch((error) => console.log(`something went wrong`, error));
server.listen(PORT, () => {
  console.log(`server running on the port ${PORT}`);
});
