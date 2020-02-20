let sortInAscending = require("./helper/sortInAscending");
let sortInDescending = require("./helper/sortInDescending");

module.exports = file => {
  let allLibraries = sortInAscending(file.libraries);
  //   for (let i = 0; i < allLibraries.length; i++) {
  //     allLibraries[i].books.sort(function(a, b) {
  //       return b - a;
  //     });
  //  }
  console.log(allLibraries);
  return allLibraries;
};
