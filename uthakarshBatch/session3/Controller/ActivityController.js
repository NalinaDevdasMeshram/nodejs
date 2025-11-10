const userData = require("../userData");
function GetAllusers(req, res, next) {
  const personData = userData.data;
  const payload = {
    data: personData,
    count: personData.length,
  };
  res.status(200).json(payload);
}

function GetAllgender(req, res, next) {
  const query = req.query;
  const searchQuery = query.gender;

  const filterData = userData.data.filter(
    (person) => person.gender === searchQuery
  );
  const payload = {
    data: filterData,
    count: filterData.length,
  };
  res.json(payload);
}

function getFirstname(req, res) {
  const params = req.params;
  const searchedName = params.user;

  const filteredData = userData.data.filter(
    (person) => person.name.first === searchedName
  );

  const payload = {
    data: filteredData,
    count: filteredData.length,
  };
  res.json(payload);
  console.log("getfirstname", filteredData);
}

module.exports = { GetAllusers, GetAllgender, getFirstname };
