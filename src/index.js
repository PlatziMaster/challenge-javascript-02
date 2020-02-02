const fibonacci = (n) => {
  let result = [];
  let nextFibo;
  for (let i = 0; i < n; i++) {
    if (i < 2) {
      result.push(1);
    } else {
      nextFibo = result[i - 2] + result[i - 1];
      result.push(nextFibo);
    }
  }
  return result;
}

module.exports = fibonacci;