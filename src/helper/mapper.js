const readline = require("readline");
const exporter = require("./exporter");

module.exports = readStream => {
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
  let libraryBookIndex = [];

  //iterated through every line of the file and maps data to objects
  rl.on("line", line => {
    let input = line.split(" ");
    console.log(input);
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
        allInputs[i].forEach(element => {
          File.scoresOfBooks.push(element);
        });
      } else {
        if (i % 2 === 0) {
          let lib = allInputs[i];
          let library = {
            libId: counter,
            numberOfBooks: lib[0],
            signupTime: lib[1],
            booksShippedInOneDay: lib[2],
            books: []
          };
          libraries.push(library);
          counter++;
        }
        if (i % 2 !== 0) {
          let index = i - 1;
          let books = allInputs[i];
          console.log(libraries);
          console.log(counter - 1);
          books.forEach(book => {
            libraries[counter - 1].books.push(book);
            allBooks.push(book);
          });
        }
      }
    }
    allBooks = [...new Set(allBooks)];
    File.allBooks = allBooks;
    File.libraries = libraries;
    console.log("File", File);
    console.log("Lib", libraries);
    // exporter(filename, selected);
  });
};
