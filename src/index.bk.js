const fibonacci = (n) => {
  if (n === 0) return [0];

  if (n === 1) return [1];

  return [fibonacciNumber(n - 1) + fibonacciNumber(n - 2)];
}

// console.log(fibonacci(2))
console.log(fibonacciNumber(3))
// console.log(fibonacci(4))


// module.exports = fibonacci;