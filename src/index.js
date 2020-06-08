const fibonacci = (n) => {
  const fibonacciChallenge = [];
  let a = 1;
  let b = 1;
  for (let i = 1; i <= n; i++) {
    fibonacciChallenge.push(a);
    let c = a + b
    a = b;
    b = c;
  }

  return fibonacciChallenge;
}


module.exports = fibonacci;