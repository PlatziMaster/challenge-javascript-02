const fibonacci = (n) => {
  const fibonacciNumbers = [1];
  for (let index = 1; index < n; index++) {
    if (index > 1) {
      fibonacciNumbers.push(fibonacciNumbers[fibonacciNumbers.length - 1] + fibonacciNumbers[fibonacciNumbers.length - 2]);
    } else {
      fibonacciNumbers.push(1);
    }
  }
  return fibonacciNumbers;
}

module.exports = fibonacci;