const userData = require("../userData");

function GetAllusers(req, res) {
  const usersData = userData.data;
  res.json({ data: usersData, size: usersData.length });
}
// console.log("GetAllusers", GetAllusers, userData);

function GetUserByGender(req, res) {
  const query = req.params;
  const quiredGender = query.gender;
  const filterData = userData.data.filter(
    (user) => user.gender === quiredGender
  );
  res.json({ data: filterData, size: filterData.length });
}

function GetUserByFirstName(req, res) {
  const routeparams = req.params;
  const queriedFirstparam = routeparams.firstName;

  const filterData = userData.data.filter(
    (person) => person.name.firstName === queriedFirstparam
  );
  res.json({ data: filterData, size: filterData.length });
}

module.exports = { GetAllusers, GetUserByFirstName, GetUserByGender };
