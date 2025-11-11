function HomeResponse(req, res) {
  res.status(200).send("welcome to the home page");
}
function AboutResponse(req, res) {
  res.send("talk something the node.js \n learn more thing about the node.js");
}

function ContactResponse(req, res) {
  res.send("4578klrur521");
}
function DailyResponse(req, res) {
  dailyInfo = {
    name: "nalina",
    wakeup: "5clock",
    gym: true,
    address: {
      city: "umred",
      district: "Nagpur",
      state: "Maharashtra",
      pincode: 4512578,
    },
  };
  res.json(dailyInfo);
}

module.exports = {
  HomeResponse,
  AboutResponse,
  ContactResponse,
  DailyResponse,
};
