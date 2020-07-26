const fibonacci = (n) => {
  var fibonacci = [0 , 1];

  for (var i = 2; i <= n; i++) {
    fibonacci[i] = fibonacci[i-2] + fibonacci[i-1];
  }
  fibonacci.shift();
  return fibonacci;
}

module.exports = fibonacci;