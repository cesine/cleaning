var leftPad = function (val, size, ch) {
    var result = ""+val; //ensure string
    ch = ch||" "; // add space at end
    while (result.length < size) {
        result = ch + result; // until the required length
    }
    return result;
};

module.exports = leftPad;