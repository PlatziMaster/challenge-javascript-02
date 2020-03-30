const memoization = (n, memo) => {
  // Return the n Fibonacci number
  if (n === 0 || n === 1) {
    return (memo[n] = 1);
  }

  if (memo[n]) {
    return (memo[n] = memo[n]);
  }

  return (memo[n] = memoization(n - 1, memo) + memoization(n - 2, memo));
};

const fibonacci = n => {
  const memo = {};

  memoization(n, memo);

  const result = Object.values(memo);

  // Return a slice from the result
  // because it start counting from 0
  return result.slice(0, n);
};

module.exports = fibonacci;
