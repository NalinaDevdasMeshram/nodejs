//sync
const fs = require("fs");
// console.log(fs);
//Async..........
// fs.writeFileSync("./test.txt", "Hello world Asyn" (err)=>);

// const res = fs.readFileSync("./Contact.txt", "utf-8");
// console.log(res);

// fs.readFile("./Contact.txt", "utf-8", (err, res) => {
//   if (err) {
//     console.log("Error", err);
//   } else {
//     console.log(res);
//   }
// });
/*********currentDate provide****** */
fs.appendFileSync("./Contact.txt", new Date().getDate().toLocaleString());
// ******getting the whole date******
fs.appendFileSync("./Contact.txt", `${Date.now()} hey there\n`);

console.log(fs.statSync("./Contact.txt"));
