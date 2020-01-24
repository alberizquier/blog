
let wordVerify = (sentence, words) => {
    let result = [];
    for (let i = 0; i < words.length; i++) {
        if (sentence.includes(words[i])) {
            result.push(words[i]);
        }
    }
    if (result.length === 0) {
        console.log('Your sentence has been published');
    } else {
        console.log(result);
    }
};

wordVerify("This is an example", ['test', 'example', 'try', 'one']);

module.exports = wordVerify;