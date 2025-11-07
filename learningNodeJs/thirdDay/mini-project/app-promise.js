// const fs = require("fs").promises;
// fs.readFile("a.txt", "utf8").then((data1) =>
//   fs
//     .readFile("b.txt", "utf8")
//     .then((data2) => [data1, data2])
//     .then(([data1, data2]) =>
//       fs.readFile("c.txt", "utf8").then((data3) => [data1, data2, data3])
//     )
//     .then(([data1, data2, data3]) => {
//       const combine = `${data1} ${data2} ${data3}`;
//       return fs.writeFile("combine.txt:", combine);
//     })
//     .then(() =>
//       console.log('combine file created successfully using promises!"')
//     )
//     .catch((error) => console.error("error:", error))
// );

const fs = require("fs").promises;

fs.readFile("a.txt", "utf8")
  .then((data1) => fs.readFile("b.txt", "utf8").then((data2) => [data1, data2]))
  .then(([data1, data2]) =>
    fs.readFile("c.txt", "utf8").then((data3) => [data1, data2, data3])
  )
  .then(([data1, data2, data3]) => {
    const combined = `${data1} ${data2} ${data3}`;
    return fs.writeFile("combined.txt", combined);
  })
  .then(() => console.log("✅ Combined file created using Promises!"))
  .catch((err) => console.error("Error:", err));
