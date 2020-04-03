function generateFibo (num) {
    let arrayFibo = [0, 1]
    for (let i = 2; i <= num; i++ ) {
        arrayFibo[i] = arrayFibo[i - 1] + arrayFibo[i - 2]
    }
    arrayFibo.shift();
    return arrayFibo;
}
module.exports = generateFibo;