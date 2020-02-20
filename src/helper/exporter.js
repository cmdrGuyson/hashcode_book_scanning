const fs = require("fs");

module.exports = (filename, slides) => {
  const stream = fs.createWriteStream(`../output/${filename}.out`, {
    flags: "a"
  });
  stream.write(slides.length + "\n");
  for (let i = 0; i < slides.length; i++) {
    let line = [];
    for (let j = 0; j < slides[i].images.length; j++) {
      line.push(slides[i].images[j].id);
    }
    stream.write(line.join(" ") + "\n");
  }
  stream.end();
};