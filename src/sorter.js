let sortInAscending = require("./helper/sortInAscending");

module.exports = file => {
  let allLibraries = sortInAscending(file.libraries);
  console.log(allLibraries.length);
  return allLibraries;
};
