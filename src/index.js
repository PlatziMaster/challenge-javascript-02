const fibonacci = (n) => {
  let valorI = 1;
  let valorII = 1;
  let valorActual = 0;
  let fibonacciArray = [];
  for (let index = 1; index <= n; index++) {
    valorActual = valorII;
    valorII = valorI;
    valorI = valorI + valorActual;
    fibonacciArray.push(valorActual);
  };
  return fibonacciArray;
};

module.exports = fibonacci;