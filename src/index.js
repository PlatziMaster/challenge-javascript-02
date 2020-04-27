const fibonacci = (n) => {
  let a = 0;
  let b = 1;
  let c = 0;
  let result = [];

  for (let i = 0; i < n; i++) {
    a = b;
    b = c;
    c = a + b;
    result.push(c);
    debugger
  }

  return result;
}

module.exports = fibonacci;