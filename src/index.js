const fibonacci = (n) => {
  let a = 0;
  let b = 1;
  let c = b;
  let x = [];
  x[0] = c;
  for (let index = 1; index < n; index++) {
    c = b + a;
    a = b;
    b = c;
    x[index] = c;
    }
    return x;
  }

  module.exports = fibonacci;