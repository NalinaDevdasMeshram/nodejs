import express from "express";
// console.log(express);

const app = express();
// console.log(app);
const PORT = 8082;
// import currenciesJson from "../currency.json";
import {
  getCurrencies,
  getCurrenciesBySymbol,
} from "./controllers/currency.controller.js";

app.get("/", (req, res) => {
  res.send("<h1>currency database</h1>");
});
app.get("/currency/:symbol", getCurrencies);
app.get("/currency/:symbol", getCurrenciesBySymbol);
app.listen(PORT, () => {
  console.log(`server running on the : ${PORT}`);
});
