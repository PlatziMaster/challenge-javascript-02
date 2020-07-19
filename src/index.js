const fibonacci = (n) => {
  var fib = [0,1];
  for(i=0; i<n-1; i++){
    fib.push(fib[i]+fib[i+1]);
  }
  return (fib.slice(-n));
}

  module.exports = fibonacci;