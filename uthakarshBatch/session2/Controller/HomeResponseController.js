function getResponse(req, res) {
  res.write(
    "welcome to learning express js\ngo to the second line of the node js"
  );
  res.end();
}

function getAboutResponse(req, res) {
  res.status(200).send("welcome to homepage!!");
}

function getContact(req, res) {
  res.send("124567klk");
}

module.exports = { getResponse, getAboutResponse, getContact };
