const fibonacci = (n) => {
  var fibonacciArray =[]
  for(var i = 0; i < n ; i++){
       if(i === 0 || i === 1){
           fibonacciArray[i]= 1
       } else if(i>1){
           fibonacciArray[i] = (fibonacciArray[i-1] + fibonacciArray[i-2])
       } 
  }
  return fibonacciArray
}

  module.exports = fibonacci;