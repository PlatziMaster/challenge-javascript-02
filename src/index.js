const getFibonacciNumber = (number) => {
  if (number <= 1) return 1;
  return getFibonacciNumber(number - 2) + getFibonacciNumber(number - 1);
}

const fibonacci = (n) => {
  let result = [];
  for (let i = 0; i < n; i++) {
    result.push(getFibonacciNumber(i));
  }
  return result;
};

module.exports = fibonacci;