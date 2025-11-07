const path = require("path");

exports.listUsers = (req, res) => {
  res.sendFile(path.join(__dirname, "../views/users.html"));
};
