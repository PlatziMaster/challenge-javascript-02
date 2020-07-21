const fibonacci = (n) => {
  var fib = [1,1];
  for(i=2; i<n; i++)
  {
    fib.push(fib[i-2]+fib[i-1]);
  }
  return fib.slice(-n);
}

  module.exports = fibonacci;