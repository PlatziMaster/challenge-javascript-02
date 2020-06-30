const fibonacci = (n) => {
  const fibonacciSerie = [0, 1];
  for (let index = 2; index <= n; index++) {
    fibonacciSerie.push(fibonacciSerie[index - 1] + fibonacciSerie[index - 2]);
  }
  fibonacciSerie.shift();
  return fibonacciSerie;
};

module.exports = fibonacci;
