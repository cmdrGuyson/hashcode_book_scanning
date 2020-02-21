module.exports = libraries => {
  libraries.sort(function(a, b) {
    return b.signupTime - a.signupTime;
  });
  return libraries;
};
