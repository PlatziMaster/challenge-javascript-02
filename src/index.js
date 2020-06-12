const fibonacci = (n) => {
  let fibonacciArray = [];
  for (let i = 0; i < n; i++) {
    if (i <= 1) {
      fibonacciArray.push(1);
    } else {
      const a = i - 1;
      const b = i - 2;
      const suma = fibonacciArray[a] + fibonacciArray[b];
      fibonacciArray.push(suma);
    }
  }
  return fibonacciArray;
};

module.exports = fibonacci;
