const getCurrencies = (req, res) => {
  console.log(
    currenciesJson.data.find(
      (curr) => curr.id === req.params.symbol.toUpperCase()
    )
  );
};
const getCurrenciesBySymbol = (req, res) => {
  console.log(req.query);
};

const getUsers = (req, res) => {};
module.exports = { getCurrencies, getCurrenciesBySymbol };
