const userData = require("../userData");

function getAlluser(req, res, next) {
  const personData = userData.data;
  const getAllData = personData;
  const payload = {
    data: getAllData,
    count: getAllData.length,
  };
  res.json(payload);
}

function getAllUserByGender(req, res, next) {
  const query = req.query;
  const param = query.gender;
  const filteredData = userData.data.filter(
    (person) => person.gender === param
  );
  const payload = {
    data: filteredData,
    count: filteredData.length,
  };
  res.json(payload);
}

function getAllUserByfirstName(req, res, next) {
  const params = req.params;
  const searchFirst = params.users;
  const filterData = userData.data.filter(
    (person) => person.name.first === searchFirst
  );
  const payload = {
    data: filterData,
    count: filterData.length,
  };
  res.json(payload);
}

module.exports = { getAlluser, getAllUserByGender, getAllUserByfirstName };
