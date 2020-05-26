const fibonacci = (n) => {
  let fibo = [1, 1];

  if (n === 1) {
    return (fibo = [1]);
  } else if (n === 0) {
    return (fibo = [0]);
  } else if (n > 1) {
    for (let i = 2; i < n; i++) {
      fibo[i] = fibo[i - 2] + fibo[i - 1];
    }
    return fibo;
  }
};
module.exports = fibonacci;
