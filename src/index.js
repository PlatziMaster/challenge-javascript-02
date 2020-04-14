const fibonacci = (n) => {
  let result = [];
  if (n == 1) {
    result = [1];
  } else {
    result = [1, 1];
    for (let i = 3; i <= n; i++) {
      let aux = result[i - 3] + result[i - 2];
      result.push(aux);
    }
  }
  return result;
};

module.exports = fibonacci;
