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
    let books = libraries[i].books;
    let bookLine = [];
    for (let j = 0; j < books.length; j++) {
      bookLine.push(books[j].book);
    }
    stream.write(bookLine.join(" ") + "\n");
  }
  stream.end();
};
