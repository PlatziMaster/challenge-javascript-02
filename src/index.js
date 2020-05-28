const fibonacci = (n) => {
  let a = 0;
  let b = 1;
  for (let index = 0; index < n; index++) {
    let c = b + a ;
    return c;
    a = b;
    b = c;
  }
  }
  // fibonacci(20)

  module.exports = fibonacci;