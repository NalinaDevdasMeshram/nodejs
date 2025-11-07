const express = require("express");
// console.log(express);
const app = express();
// console.log(app);
const PORT = 8082;
currenciesJson = require("./currency.json");
const {
  getCurrencies,
  getCurrenciesBySymbol,
} = require("./controllers/currency.controller");
const usersRouter = require("./routes/users.routes");
// const {
//   getUsers,
//   getuuidData,
//   searchUsers,
// } = require("./controllers/users.controller");

app.get("/", (req, res) => {
  res.send("<h1>currency database</h1>");
});
app.get("/currency/:symbol", getCurrencies);
app.get("/currency/:symbol", getCurrenciesBySymbol);
// app.get("/users", getUsers);
// app.get("/users/search", searchUsers);
// app.get("/users/:uuid", getuuidData);
app.use("/users", usersRouter);
app.listen(PORT, () => {
  console.log(`server running on the : ${PORT}`);
});
