// ********************Basic Web Request**********************************
// const http = require("http");

// //  create server
// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text/plain" });
//   res.end("Hello, welcome to node.js server!!");
// });

// //  listen server
// server.listen(3000, () => {
//   console.log("server running on http://localhost:3000");
// });

// *********************Handling Different Route****************************

const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("welcome to node.js Home page ");
  } else if (req.url === "/about") {
    res.writeHead(200, {
      "content-type": "text/plain",
    });
    res.end("About Us Page");
  } else {
    res.writeHead(404, { "content-type": "text/plain" });
    res.end("404 page not found");
  }
});

server.listen(3000, () => {
  console.log("server running on the port 3000");
});
