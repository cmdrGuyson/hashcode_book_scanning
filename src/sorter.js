let sortInAscending = require("./helper/sortInAscending");
let sortInDescending = require("./helper/sortD");

module.exports = file => {
  let allLibraries = sortInAscending(file.libraries);
  let booksScanned = [];
  let newLibraries = [];
  for (let i = 0; i < allLibraries.length; i++) {
    let books = allLibraries[i].books;
    if (i === 0) {
      books.forEach(book => {
        booksScanned.push(book.book);
      });
      allLibraries[i].books = sortInDescending(allLibraries[i].books);
      newLibraries.push(allLibraries[i]);
    } else {
      let newBooks = [];
      books.forEach(book => {
        if (!booksScanned.includes(book.book)) {
          booksScanned.push(book.book);
          newBooks.push(book);
        }
      });
      allLibraries[i].books = newBooks;
      allLibraries[i].books = sortInDescending(allLibraries[i].books);
      if (allLibraries[i].books.length !== 0) {
        newLibraries.push(allLibraries[i]);
      }
    }
  }
  //   for (let i = 0; i < allLibraries.length; i++) {
  //     allLibraries[i].books.sort(function(a, b) {
  //       return b - a;
  //     });
  //  }
  return newLibraries;
};
