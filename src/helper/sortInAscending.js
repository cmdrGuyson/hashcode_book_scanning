const sortInDescending = require("./sortD");

module.exports = libraries => {
  libraries.sort(function(a, b) {
    return a.signupTime - b.signupTime;
  });
  // for (let i = 0; i < libraries.length; i++) {
  //   let books = sortInDescending(libraries[i].books);
  //   libraries[i].books = books;
  // }
  return libraries;
};
