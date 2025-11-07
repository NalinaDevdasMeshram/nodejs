const fs = require("fs");
const zlib = require("zlib");
const path = require("path");

const action = process.argv[2];
const filename = process.argv[3];

if (!action || !filename) {
  console.log("Usage: node app.js <compress|decompress> <filename>");
  process.exit(1);
}

const filepath = path.join(__dirname, filename);

if (action === "compress") {
  const readstream = fs.createReadStream(filepath);
  const writestream = fs.createWriteStream(`${filepath}.gz`);
  const gzip = zlib.createGzip();

  console.log(`compress ${filename}...`);
  readstream
    .pipe(gzip)
    .pipe(writestream)
    .on("finish", () => console.log("compression completed!"))
    .on("error", (err) => console.error("error:", err.message));
} else if (action === "decompress") {
  if (!filename.endsWith(".gz")) {
    console.log("Error: Please provide a '.gz' file to decompress.");
    process.exit(1);
  }
  const outputfile = filename.replace(".gz", "");
  const readstream = fs.createReadStream(filepath);
  const writestream = fs.createWriteStream(outputfile);
  const gunzip = zlib.createGzip();

  console.log(`decompressing ${filename}...`);
  readstream
    .pipe(gunzip)
    .pipe(writestream)
    .on("finish", () => console.log("decompression completed!"))
    .on("error", (err) => console.error("error:", err.message));
} else {
  console.log("Invalid action. use 'compress' or 'decompress' ");
}
