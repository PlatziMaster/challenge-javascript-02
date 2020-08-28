  const fibonacci = (n) => {
    let arr = [];
    if(n === 0)
      return 0;   
    if(n === 1) {
      arr.push(1)
      return arr;
    }
      
      
    if(n === 2) {
      arr.push(1,1)
      return arr;
    }
      
    if(n > 2) {
      arr.push(1,1)
      let fibonacciNumber = 0
    
      for(let index = 1; index <= n-2; index++) {
        fibonacciNumber = arr[index] + arr[index - 1]
        arr.push(fibonacciNumber)
      }
      return arr;
    }
  }

  module.exports = fibonacci;