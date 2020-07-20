const fibonacci = (n) => {
  let fibonacciArray = [];
  fibonacciArray[0] = 0;
  fibonacciArray[1] = 1;
  for (i = 2; i <= n; i++) {
    fibonacciArray[i] = fibonacciArray[i - 1] + fibonacciArray[i - 2];
  }
  fibonacciArray.splice(0, 1);
  return fibonacciArray;
};

module.exports = fibonacci;
