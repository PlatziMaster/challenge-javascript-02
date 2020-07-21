const fibonacci = (n) => {
  var fib = [1,1];
  for(i=1; i<n-1; i++){
    fib.push(fib[i-1]+fib[i]);
  }
  return fib.slice(-n);
}

  module.exports = fibonacci;