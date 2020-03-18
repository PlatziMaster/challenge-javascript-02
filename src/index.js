const fibonacci = (n) => {
  let result = [1];

  for (let i = 1; i < n; i++) {
    if (i <= 1) result.push(1);
    else result.push(result[i - 1] + result[i - 2]);
  }

  return result;
}

module.exports = fibonacci;