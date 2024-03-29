// ----- hashtagGenerator by adding # to prefix ----------//

//length should be less than 300 words
//each word is capitalized and concatenated without space

const hashtagGenerator = (str) => {
  if (str.length > 300 || str.trim().length === 0) {
    return false;
  }

  str = str
    .split(" ")
    .map((currElement) =>
      currElement.replace(currElement[0], currElement[0].toUpperCase())
    );

  word = `#${str.join("")}`;
  console.log(word);
};
console.log(hashtagGenerator("my name is kulveer singh"));

// output : #MyNameIsKulveerSingh