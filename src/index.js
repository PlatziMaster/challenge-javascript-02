const fibonacci = (n) => {
  var fibonacci = [];
  fibonacci[0] = 1;
  fibonacci[1] = 1;

  if( n > 1 ){
    for (var i = 2; i < n; i++) {
      fibonacci[i] = fibonacci[i-2] + fibonacci[i-1];
    }
    return fibonacci;
  }
}

module.exports = fibonacci;