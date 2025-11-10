function getHomeResponse(req, res) {
  res.status(200).send("welcome to the express.js learning");
}

function getAboutResponse(req, res) {
  res.send("welcome to home \n go to the next line of the code");
}

function getContactDetails(req, res) {
  res.send("45678dfgh899 \n nameyuo@gmail.com");
}

function getFitnessDetails(req, res) {
  const fitInfo = {
    name: "nalina meshram",
    age: 27,
    Designation: "software Developer",
    Address: {
      city: "umred",
      District: "Nagpur",
      state: "Maharashtra",
      pincode: "124568",
    },
    mobileNumber: 1568998989,
    diet: {
      morning: "Drinking Hot Water",
      Afternoon: "lunch",
      night: "Dinner",
    },
  };
  res.status(200).json(fitInfo);
}
module.exports = {
  getHomeResponse,
  getAboutResponse,
  getContactDetails,
  getContactDetails,
  getFitnessDetails,
};
