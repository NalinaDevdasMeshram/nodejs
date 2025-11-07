const http = require("http");
// console.log(http);
const fs = require("fs");
console.log(fs);
const url = require("url");
// console.log(url);
const myServer = http.createServer((req, res) => {
  if (req.url === "/favicon.ico") return res.end();
  const log = `${Date.now()}: ${req.url} New req recieved\n`;
  const myUrl = url.parse(req.url, true);
  console.log(myUrl);
  fs.appendFile("logo.txt", log, (err, data) => {
    switch (myUrl.pathname) {
      case "/":
        res.end("HomePage");
        break;
      case "/about":
        const username = myUrl.query.myname;
        res.end(`Hi ${username}`);
        break;
      case "/search":
        const search = myUrl.query.search_query;
        res.end("here your result for search", +search);
      default:
        res.end("404 page not found");
    }
  });
  console.log(req);
  console.log("request to the server!");
  res.end("Hello world server started");
});
myServer.listen(8000, () => console.log("server started!"));
