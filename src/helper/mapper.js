const readline = require("readline");
const exporter = require("./exporter");

module.exports = (readStream, filename) => {
  const rl = readline.createInterface({
    input: readStream,
    crlfDelay: Infinity
  });

  let counter = 0;

  /* Object containing all the data */

  console.log("Crunching the numbers. Please wait!");

  //iterated through every line of the file and maps data to objects
  rl.on("line", line => {
    console.log(line);
  });

  //runs once the end of the file is reached
  rl.on("close", function() {
    //calculateSlices(pizzas, filename);
    // exporter(filename, selected);
  });
};
