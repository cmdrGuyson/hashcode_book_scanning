module.exports = books => {
  books.sort(function(a, b) {
    return b.score - a.score;
  });
  return books;
};
