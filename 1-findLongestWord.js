//find the longest word

const findLongestWord = (str) => {
    if(str.trim().length === 0 ) {
        return false;
    }

    words = str.split(" ").sort((a, b) => b.length - a.length);
    console.log(words);
    return words[0];
};


console.log(findLongestWord("My name is Kulveer Singh from Uttarakhand, India"));
