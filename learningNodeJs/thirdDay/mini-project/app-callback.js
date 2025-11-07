const fs = require("fs");
fs.readFile("a.txt", "utf8", (err, data1) => {
  if (err) return console.error("reading error in a.txt:", err);
  fs.readFile("b.txt", "utf8", (err, data2) => {
    if (err) return console.error("reading error in b.txt:", err);
    fs.readFile("c.txt", "utf8", (err, data3) => {
      if (err) return console.log("reading error in c.txt:", err);
      const combined = `${data1} ${data2} ${data3}`;

      fs.writeFile("combine.txt", combined, (err) => {
        if (err) return console.log("writing the combine.txt:", err);
        console.log("combine file created using callback");
      });
    });
  });
});
