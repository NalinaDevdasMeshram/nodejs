const getUserJson = require("../users.json");
const { possibleGenders } = require("../config");
const { userSearchSchema } = require("../validations/userSearchvalidators");
const getUsers = (req, res) => {
  res.send(getUserJson);
};
const getuuidData = (req, res) => {
  const { uuid } = req.params;

  const requsers = getUserJson.data.find((user) => user.login.uuid === uuid);
  if (requsers) return res.send(requsers);
  res.status(404).send({ message: `user with uuid : ${uuid} not found` });
};
const searchUsers = (req, res) => {
  const { gender, age } = req.query;
  console.log(userSearchSchema.validate({ gender, age }));
  if (gender && age) {
    return res.send(
      getUserJson.data.filter(
        (users) => users.gender === gender && users.dob.age === parseInt(age)
      )
    );
  } else if (gender) {
    return res.send(
      getUserJson.data.filter((users) => users.gender === gender)
    );
  } else if (age) {
    return res.send(
      getUserJson.data.filter((users) => users.dob.age === parseInt(age))
    );
  } else {
    return res
      .status(400)
      .send({ message: "please provide  valid search query" });
  }
};
module.exports = { getUsers, getuuidData, searchUsers };
