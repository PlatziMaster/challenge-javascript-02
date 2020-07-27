const fibonacci = (n) => {

  const fibonacciArray = [0,1]
  if(n > 0) {
    for (let index = 2; index <= n; index++) {
      fibonacciArray.push(
        fibonacciArray[index-1] + fibonacciArray[index-2] 
      );
    }
    fibonacciArray.shift()
    return fibonacciArray;
  }
  return;
}


  module.exports = fibonacci;