const userData = require("../userData");

function GetAllusers(req, res) {
  const usersData = userData.data;
  res.json({ data: usersData, size: usersData.length });
}
// console.log("GetAllusers", GetAllusers, userData);

function GetUserByGender(req, res) {
  const query = req.query;
  const quiredGender = query.gender;
  const filterData = userData.data.filter(
    (user) => user.gender === quiredGender
  );
  res.json({ data: filterData, count: filterData.length });
}

function GetUserByFirstName(req, res) {
  const params = req.params;
  const queriedFirstparam = params.username;

  const filterData = userData.data.filter(
    (person) => person.name.first === queriedFirstparam
  );

  res.json({ data: filterData, size: filterData.length });
}
console.log("GetUserByFirstName", GetUserByFirstName);

module.exports = { GetAllusers, GetUserByFirstName, GetUserByGender };
