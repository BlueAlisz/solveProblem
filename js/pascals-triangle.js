function generate(numRows) {
    var result = [];
    for (var i = 0; i < numRows; i++) {
        result[i] = new Array(i + 1);
        for (var j = 0; j <= i; j++) {
            if (j === 0 || j === i) {
                result[i][j] = 1;
            }
            else {
                result[i][j] = result[i - 1][j - 1] + result[i - 1][j];
            }
        }
    }
    console.log(result);
    return result;
}
generate(5);
