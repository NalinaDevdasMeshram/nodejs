// const http = require("http");
// const port = 8082;
// const server = http.createServer(() => {
//   console.log("hello from the server");
// });
// server.listen(port, () => {
//   console.log(`server started :${port}`);
// });

// const http = require("http");
// // const { version } = require("os");

// const server = http.createServer((req, res) => {
//   console.log(req);
//   const serverInfo = {
//     serverName: "crio sever",
//     version: "1.0.0",
//     date: new Date().toLocaleDateString(),
//     time: new Date().toLocaleTimeString(),
//   };
//   res.write(JSON.stringify(serverInfo));
//   res.end();
//   if (req.url === "/status") {
//     res.writeHead(200, { "Content-Type": "application/json" });
//     res.write(JSON.stringify(serverInfo));
//     res.end();
//   } else {
//     res.writeHead(200, { "Content-Type": "text/html" });
//     res.write(`<h1>Hello from server</h1>`);
//     res.end();
//   }
// });
// server.listen(8082, () => {
//   console.log("welcome");
// });

const http = require("http");
const PORT = 8089;

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/") {
    if (req.method !== "GET") {
      res.writeHead(405, { "content-type": "text/plain" });
      return res.end(`${req.method} is not allowed for the node js`);
    }
    res.writeHead(200, { "content-type": "text/plain" });
    res.write("welcome to the home page!!");
    res.write("\n this second line of the home page");
    res.end("\n end of response");
  } else if (req.url === "/about") {
    res.writeHead(200, { "content-type": "text/plain" });
    res.write("About page : this website create by the Nalina Meshram");
    res.end();
  } else if (req.url === "/fitness") {
    const fitnessInfo = {
      name: "nalina",
      dob: "05/02/2015",
      role: "software Developer",
      age: 27,
      address: {
        street: "Hanuman temple",
        place: "Waigoan",
        pincode: 441204,
      },
    };
    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify(fitnessInfo));
  }
  // res.end(`404 something went wrong`);
});
server.listen(PORT, () => {
  console.log("server running on the PORT", PORT);
});
