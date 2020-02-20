/* Entry point */

const readline = require("readline");
const fs = require("fs");
const mapper = require("./helper/mapper");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let file;

rl.question("Input file name ", answer => {
  console.log(`Reading file name: ${answer}`);
  switch (answer) {
    case "a":
      file = "a_example";
      break;
    case "b":
      file = "b_read_on";
      break;
    case "c":
      file = "c_incunabala";
      break;
    case "d":
      file = "d_tough_choices";
      break;
    case "e":
      file = "e_so_many_books";
      break;
    case "f":
      file = "F_libraries_of_the_world";
  }
  let readStream = fs.createReadStream(`../input/${file}.txt`, "utf8");
  mapper(readStream);
  rl.close();
});
