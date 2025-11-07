const http = require("http");
const fs = require("fs");
const path = require("path");
const { type } = require("os");

const server = http.createServer((req, res) => {
  let filepath = path.join(
    __dirname,
    "public",
    req.url === "/" ? "index.html" : req.url
  );
  const extname = path.extname(filepath);
  let contentType = "text/html";

  //   Determine content type
  switch (extname) {
    case ".css":
      contentType = "text/css";
      break;
    case ".js":
      contentType = "text/javascript";
      break;
  }

  // read  and server file
  fs.readFile(filepath, (err, content) => {
    if (err) {
      if (err.code === "ENOENT") {
        res.writeHead(404);
        res.end("page not found");
      } else {
        res.writeHead(500);
        res.end("server not responding");
      }
    } else {
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content);
    }
  });
});

server.listen(3035, () => "server running on the port number 3035");
