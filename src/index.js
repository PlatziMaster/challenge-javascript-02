"use strict";
function fibonacciNumber(n) {
    if (n === 0)
        return 0;
    if (n === 1)
        return 1;
    return fibonacciNumber(n - 1) + fibonacciNumber(n - 2);
}
function fibonacci(n) {
    if (n === 0)
        return [0];
    var acc = [];
    for (var index = 1; index <= n; index++) {
        acc.push(fibonacciNumber(index));
    }
    return acc;
}
module.exports = fibonacci;
