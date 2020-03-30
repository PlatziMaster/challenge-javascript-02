const { performance } = require('perf_hooks');

const memoization = (n, memo) => {
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

  return result.slice(0, n);
};

module.exports = fibonacci;
