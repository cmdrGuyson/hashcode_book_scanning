module.exports = libraries => {
  libraries.sort(function(a, b) {
    return a.signupTime - b.signupTime;
  });
  return libraries;
};
