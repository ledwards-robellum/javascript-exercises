const reverseString = function(str) {
    let seperatedString = str.split("");
    let sortReversed = seperatedString.sort((a, b) => a - b).reverse();
    let joinedString = sortReversed.join("");
    return joinedString;
};

reverseString("hello there")
reverseString("123! abc! Hello, Odinite.")
reverseString("")

// Do not edit below this line
module.exports = reverseString;
