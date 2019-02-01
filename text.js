let text = "some text is written here";
let getWords = (str) => {
    let words = str.split(" ");
    for (let i = 0; i < words.length - 1; i++) {
        words[i] += " ";
        console.log(words[i]);
    }
    // console.log(words);
};

console.log(getWords(text));
