// by default, module.exports = {}

module.exports.add = function (num1, num2) {
    // false, undefined, null, 0, '' --> boolean false
    // everything else --> boolean true
    if(typeof num1 !== 'number') {
        throw 'Parameter 1 is expected to be a number, but got ' + num1;
    }
    if(typeof num2 !== 'number') {
        throw 'Parameter 2 is expected to be a number, but got ' + num2;
    }
    return num1 + num2;
}

module.exports.subtract = function (num1, num2) {
    return num1 - num2;
}
module.exports.multiply = function (num1, num2) {
    return num1 * num2;
}

module.exports.divide = function (num1, num2) {
    return num1 / num2;
}

module.exports.modulus = function (num1, num2) {
    return num1 % num2;
}
