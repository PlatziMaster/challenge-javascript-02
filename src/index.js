const fibonacci = (n) => {
  let fibArray = [0, 1];
  for (let i = 2; i <= n; i++) {
    fibArray.push(fibArray[i - 1] + fibArray[i - 2]);
  }
  fibArray.shift();
  return fibArray;
};

module.exports = fibonacci;
