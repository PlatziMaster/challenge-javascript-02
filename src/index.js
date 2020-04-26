const fibonacciClosure = () => {
  const creatingSerie = (n) => {
    const serie = [0, 1];
    for (let i = 2; i <= n; i++) {
      serie.push(serie[i - 1] + serie[i - 2]);
    }
    serie.shift(0);
    return serie;
  }
  return creatingSerie;

};
let fibonacci = fibonacciClosure();
fibonacci(1);

module.exports = fibonacci;


