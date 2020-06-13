const fibonacci = (n) => {
  let fibonacciArray = [];
  for (let i = 0; i < n; i++) {
    if (i <= 1) {
      fibonacciArray.push(1);
    } else {
      const firstPrecedingNumber = i - 1;
      const secondPrecedingNumber = i - 2;
      const suma =
        fibonacciArray[firstPrecedingNumber] +
        fibonacciArray[secondPrecedingNumber];
      fibonacciArray.push(suma);
    }
  }
  return fibonacciArray;
};

module.exports = fibonacci;
