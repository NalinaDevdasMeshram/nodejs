const express = require("express");
const server = express();
const PORT = 8089;
const {
  getResponse,
  getAboutResponse,
  getContact,
} = require("./Controller/HomeResponseController");
const {
  GetAllusers,
  GetUserByFirstName,
  GetUserByGender,
} = require("./Controller/ActivityController");
const HomeRoutes = require("./Routes/HomeRoutes");
const ActivityRoutes = require("./Routes/ActivityRoutes");
const userData = require("./userData");

server.get("/", getResponse);

server.get("/about", getAboutResponse);

server.get("/contact", getContact);

server.get("/fitness", (req, res) => {
  const fitInfo = {
    name: "nalina",
    age: 27,
    sleep8Hourse: true,
    address: {
      state: "maharashtra",
      district: "Nagpur",
      Atpost: "waigoan",
      pincode: 441204,
    },
  };
  res.status(200).json(fitInfo);
});

//---------------Activiti--------------------

// 2.get all gender
// server.get("/api/v1/users/search", (req, res) => {
//   const query = req.query;
//   const searchGenderData = query.gender;
//   const filterData = userData.data.filter(
//     (person) => person.gender === searchGenderData
//   );

//   const payload = {
//     data: filterData,
//     count: filterData.length,
//   };
//   res.json(payload);
//   console.log(payload);
// });

// use allows all types of requests GET, POST, DELETE, PUT, PATCH
server.use("/api/v1/activity", ActivityRoutes);
server.listen(PORT, () => {
  console.log(`server running on the PORT : ${PORT}`);
});
