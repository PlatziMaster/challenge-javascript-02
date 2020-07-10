const fibonacci = (n) => {
  const result = [1, 1];

  if (n === 1) {
    return [1];
  }

  for(let i = 1; i < n - 1; i++) {
    result.push(result[i-1] + result[i]);
  }

  return result;
}

module.exports = fibonacci;