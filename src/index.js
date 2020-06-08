const fibonacci = (n) => {
  const finonacciChallenge = [];
  let a = 1;
  let b = 1;
  for (let i = 1; i <= n; i++) {
    finonacciChallenge.push(a);
    let c = a + b
    a = b;
    b = c;
  }

  return finonacciChallenge;
}


module.exports = fibonacci;