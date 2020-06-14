const fibonacci = (n) => {
  if (n === 1) {
    return [1];
  }
  let serie = [1, 1];
  for (let i = 2; i < n; i++) {
    let newDigit = serie[i - 1] + serie[i - 2];
    serie.push(newDigit);
  }
  return serie;
};

module.exports = fibonacci;
