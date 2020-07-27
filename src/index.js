const fibonacci = (n) => {
    let fibonacciArray = [];
    fibonacciArray.push(n);
    for(var i=0; i<n; i++){
        let fibonacciArrayLenght = fibonacciArray.length;
        let fibonacciLastValue = fibonacciArray[fibonacciArrayLenght - 1];
        let fibonacciAlmostLastValue = fibonacciArray[fibonacciArrayLenght -2];
        if(fibonacciArrayLenght<2){
            fibonacciArray.push(fibonacciLastValue+1);
        }else{
            fibonacciArray.push(fibonacciLastValue + fibonacciAlmostLastValue);
        };
    }
    return fibonacciArray;
  }

console.log(fibonacci(15));


  module.exports = fibonacci;
