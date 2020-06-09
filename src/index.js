const fibonacci = (n) => {
  const fibonacciChallenge = [];
  let fibonacciNumber = 1;
  let iterateNumber = 1;
  for (let i = 1; i <= n; i++) {
    fibonacciChallenge.push(fibonacciNumber);
    let sumValues = fibonacciNumber + iterateNumber
    fibonacciNumber = iterateNumber;
    iterateNumber = sumValues;
  }

  return fibonacciChallenge;
}


module.exports = fibonacci;