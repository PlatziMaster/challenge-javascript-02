const fibonacci = (n) => {
  const result = [];
  let next;
  for (let i = 0; i < n; i++) {
    if (i < 2) {
      result.push(1);
    } else {
      next = result[i - 2] + result[i - 1];
      result.push(next);
    }
  }
  return result;
};

module.exports = fibonacci;
