// **************file System*************
// const fs = require("fs");
// fs.writeFileSync("hello.txt", "Welcome to node.js!");
// const data = fs.readFileSync("hello.txt", "utf-8");
// console.log(data);

// ****************Path*******************
// const path = require("path");
// console.log(path.join(__dirname, "folder", "hello.txt"));
// console.log(path.basename(__filename));

// *******************OS*********************
// const os = require("os");
// console.log(os.platform());
// console.log(os.totalmem());
// console.log(os.freemem());

// *********************HTTP****************************

// const http = require("http");
// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "content-type": "plain/text" });
//   res.end("Hello from node.js server!");
// });
// server.listen(3000, () => console.log("server running on the port 3000!!"));

// ******************URL************

// const url = require("url");
// const myUrl = new URL("https://example.com/product?id=123&category=books");
// console.log(myUrl.hostname);
// console.log(myUrl.searchParams.get("id"));

// ********************CREATE DIRECTORY****************************
// const fs = require("fs");
// fs.mkdir("testdir", (err) => {
//   if (err) throw err;
//   console.log("create directory!!");
// });

// **********************READ DIRECTORY*******************
// const fs = require("fs");
// fs.readdir(".", (err, files) => {
//   if (err) throw err;
//   console.log("Files :", files);
// });

// ***************Remove Directory****************
// const fs = require("fs");
// fs.rmdir("testdir", (err) => {
//   if (err) throw err;
//   console.log("Directory remove!");
// });

// *****************FILE SYSTEM EVENT**************
// const fs = require("fs");
// fs.watch("message.txt", (eventType, filename) => {
//   console.log(`file ${filename} was ${eventType}`);
// });

// ******************Read file as a Stream ***********************

// const fs = require("fs");
// const readStream = fs.createReadStream("hello.txt", "utf8");
// readStream.on("data", (chunk) => {
//   console.log("----------New chunk--------");
//   console.log(chunk);
// });

// readStream.on("end", () => {
//   console.log("Finished reading file...");
// });

// ********************PIPING AND CHAINING STREAM**********************
// *****Piping*************
// const fs = require("fs");
// const readStream = fs.createReadStream("input.txt");
// const writeSteam = fs.createWriteStream("output.txt");

// readStream.pipe(writeSteam);
// console.log("file copies successfully!!");

//  *******************Chaining******************
//   ************compress**********
const fs = require("fs");
const zlib = require("zlib");
fs.createReadStream("input.txt")
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream("input.txt.gz"));

console.log("file compress successfully!!");

// ***************Decompress***************
fs.createReadStream("input.txt.gz")
  .pipe(zlib.createGunzip())
  .pipe(fs.createWriteStream("input.txt"));
