const fs = require("fs");

module.exports = (filename, libraries) => {
  const stream = fs.createWriteStream(`../output/${filename}.out`, {
    flags: "a"
  });
  stream.write(libraries.length + "\n");
  console.log(libraries);
  for (let i = 0; i < libraries.length; i++) {
    let line = [];
    line.push(libraries[i].libId);
    line.push(libraries[i].numberOfBooks);
    stream.write(line.join(" ") + "\n");
    stream.write(libraries[i].books.join(" ") + "\n");
  }
  stream.end();
};
