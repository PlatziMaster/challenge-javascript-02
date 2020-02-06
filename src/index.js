const fibonacci = (n) => {
  let fibonacciSerie=[0, 1];
  for (let i = 1; i < n; i++) {
    fibonacciSerie.push(fibonacciSerie[i] + fibonacciSerie[i-1]);
  }
  fibonacciSerie.shift();
  return fibonacciSerie;
}

module.exports = fibonacci;