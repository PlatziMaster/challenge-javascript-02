const fibonacci = (n) => {
    let fib = [];
    if (n < 2) {
        fib[0] = n;
        return fib;
    } else {
        fib[0] = 1;
        fib[1] = 1;
        for (let i = 2; i < n; i++) {
            fib.push(fib[i - 1] + fib[i - 2]);
        }
    }
    return fib;
}

module.exports = fibonacci;