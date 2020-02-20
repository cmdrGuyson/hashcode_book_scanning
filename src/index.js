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
      file = "b_lovely_landscapes";
      break;
    case "c":
      file = "c_memorable_moments";
      break;
    case "d":
      file = "d_pet_pictures";
      break;
    case "e":
      file = "e_shiny_selfies";
      break;
    case "f":
      file = "small_horizontal";
  }
  let readStream = fs.createReadStream(`../input/${file}.txt`, "utf8");
  mapper(file, readStream);
  rl.close();
});
