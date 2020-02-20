const readline = require("readline");
const calculateSlices = require("./calculateSlices");
const sort = require("./sort");
const exporter = require("./export");

module.exports = (readStream, filename) => {
  const rl = readline.createInterface({
    input: readStream,
    crlfDelay: Infinity
  });

  let counter = 0;

  /* Object containing all the data */
  let pizzas = {
    maxSlices: 0,
    noOfTypes: 0,
    types: []
  };

  console.log("Crunching the numbers. Please wait!");

  //iterated through every line of the file and maps data to objects
  rl.on("line", line => {
    let input = line.split(" ");
    if (counter == 0) {
      pizzas.maxSlices = parseInt(input[0], 10);
      pizzas.noOfTypes = parseInt(input[1], 10);
    } else {
      for (i = 0; i < pizzas.noOfTypes; i++) {
        pizzas.types.push(parseInt(input[i], 10));
      }
    }
    counter++;
  });

  //runs once the end of the file is reached
  rl.on("close", function() {
    //calculateSlices(pizzas, filename);
    let selected = sort(pizzas);
    exporter(filename, selected);
  });
};
