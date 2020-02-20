const fs = require("fs");

module.exports = (filename, considered) => {
  fs.appendFile(`./output/${filename}.out`, considered.length, function(error) {
    if (error) return console.log(error);

    fs.appendFile(
      `./output/${filename}.out`,
      "\n" + considered.join(" "),
      function(error) {
        if (error) return console.log(error);
      }
    );
  });
};
