const fibonacci = (n) => {
  var a = 1, b = 0, serie = [], temp;
  for (let i = 0; i < n; i++) {
    temp = a;
    a += b;
    b = temp;
    serie[i] = b;
  }
  return serie;
}

console.log(fibonacci(14));


  module.exports = fibonacci;