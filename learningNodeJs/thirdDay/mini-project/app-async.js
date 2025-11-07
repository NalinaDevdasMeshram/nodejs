const { error } = require("console");
const { promises } = require("dns");

const fs = require("fs").promises;
async function combineFile() {
  try {
    const [a, b, c] = await Promise.all([
      fs.readFile("a.txt", "utf8"),
      fs.readFile("b.txt", "utf8"),
      fs.readFile("c.txt", "utf8"),
    ]);
    const combine = `${a} ${b} ${c}`;
    await fs.writeFile(`combine.txt`, combine);
    console.log("combine file created using Async/Await");
  } catch (err) {
    console.error("error:", err.message);
  }
}
combineFile();
