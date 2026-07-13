function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
}

const sumAll = function(...arr) {
    let sortedArr = arr.sort(compareNumeric);
    let newArr = [];
    let sum = 0;

    for (let i = sortedArr[0]; i <= sortedArr[1]; i++) {
        newArr = newArr.concat([i]);
    }
    return sum = newArr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
};

sumAll(1,4);
// Do not edit below this line
module.exports = sumAll;
