const fibonacci = (n) => {

  let result = [1];

  for (let i = 1; i < n; i++)
    result.push((i > 1) ? result[i - 1] + result[i - 2] : 1);

  return result;
}

module.exports = fibonacci;