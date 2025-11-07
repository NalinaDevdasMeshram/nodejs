console.log("Hello, Welcome to Node.js!!");

const fs = require("fs");
const PORT = 3000;
const http = require("http");

const server = http.createServer((req, res) => {
  console.log("welcome to node.js");
  if (req.url === "/") {
    res.end("Home page");
  } else if (req.url === "/about") {
    res.end("welcome to the home page");
  } else {
    res.end("404 page not found");
  }
});
console.log(`Method name + ${url}`);
server.listen(PORT, () => {
  console.log(`server running on the port`, PORT);
});

// try {
//   const data = fs.readFileSync("file.txt", "utf-8");
//   console.log(data);
// } catch {
//   console.log(err);
// }
// console.log("reading files....");
