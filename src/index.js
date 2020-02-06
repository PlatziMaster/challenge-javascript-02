const fibonacci = n => {
  let previousNumber = [0, 1];
  let serie = [1];
  for (let i = 1; i < n; i++) {
    serie[i] = previousNumber[0] + previousNumber[1];
    previousNumber[0] = previousNumber[1];
    previousNumber[1] = serie[i];
  }
  return serie;
};

module.exports = fibonacci;
