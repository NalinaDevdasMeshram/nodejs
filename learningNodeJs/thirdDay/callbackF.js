// ****************callback function*********************
function greet(name, callback) {
  console.log(`Hello ${name}`);
  callback();
}

greet("Nalina", () => {
  console.log("Greeting completed...");
});

const fs = require("fs");
fs.readFile("file.txt", "utf8", (err, data) => {
  if (err) {
    console.log("something went wrong:", err);
    return;
  }
  console.log(data);
});
console.log("callback function executed successfully!!");
