const readline = require("readline");
const sorter = require("../sorter");
const exporter = require("./exporter");

module.exports = (filename, readStream) => {
  const rl = readline.createInterface({
    input: readStream,
    crlfDelay: Infinity
  });

  let counter = 0;

  let File = {
    allBooks: [],
    totalLibraries: 0,
    deadline: 0,
    scoresOfBooks: [],
    libraries: [],
    totalNumOfBooks: 0
  };

  let allInputs = [];
  let libraries = [];
  let allBooks = [];
  /* Object containing all the data */

  console.log("Crunching the numbers. Please wait!");
  let score = [];

  //iterated through every line of the file and maps data to objects
  rl.on("line", line => {
    let input = line.split(" ");
    allInputs.push(input);
  });

  //runs once the end of the file is reached
  rl.on("close", function() {
    for (let i = 0; i < allInputs.length; i++) {
      if (i === 0) {
        File.totalNumOfBooks = allInputs[i][0];
        File.totalLibraries = allInputs[i][1];
        File.deadline = allInputs[i][2];
      } else if (i === 1) {
        let count = 0;
        allInputs[i].forEach(element => {
          File.scoresOfBooks.push(element);
          score.push({
            book: count,
            score: parseInt(element, 10)
          });
          count++;
        });
      } else {
        if (i % 2 === 0) {
          let lib = allInputs[i];
          let library = {
            libId: counter,
            numberOfBooks: parseInt(lib[0], 10),
            signupTime: parseInt(lib[1], 10),
            booksShippedInOneDay: parseInt(lib[2], 10),
            books: []
          };
          libraries.push(library);
          counter++;
        }
        if (i % 2 !== 0) {
          let books = allInputs[i];
          let index = libraries.length - 1;
          books.forEach(book => {
            let bookId = parseInt(book, 10);
            let mark = score.find(x => x.book === bookId);
            allBooks.push({
              book: bookId,
              score: mark.score
            });
            libraries[index].books.push({
              book: bookId,
              score: mark.score
            });
          });
        }
      }
    }
    // allBooks = [...new Set(allBooks)];
    File.allBooks = allBooks;
    File.libraries = libraries;
    let librariesX = sorter(File);
    exporter(filename, librariesX);
  });
};
