const repeatString = function(str, amt) {
    let output = '';
    if (amt >= 0) {
        for (let i = 0; i < amt; i++) {
            output += str;
        }
        return output;
    } else {
        return output = 'ERROR';
    }
};

repeatString('hey', 3)
repeatString('bye', 0)
// Do not edit below this line
module.exports = repeatString;
