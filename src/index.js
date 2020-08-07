const fibonacci = (n) => {
    let fibonacciArray = [];
    let f1 = 0;
    let f2 = 1;
    let f3 = 0;
    for(var i=0; i<n; i++){
        f1 = f2;
        f2 = f3;
        f3 = f1 + f2
        fibonacciArray.push(f3);
    }
    // fibonacciArray.push(n);
    // for(var i=0; i<n; i++){
    //     let fibonacciArrayLenght = fibonacciArray.length;
    //     let fibonacciLastValue = fibonacciArray[fibonacciArrayLenght - 1];
    //     let fibonacciAlmostLastValue = fibonacciArray[fibonacciArrayLenght -2];
    //     if(fibonacciArrayLenght<2){
    //         fibonacciArray.push(fibonacciLastValue+1);
    //     }else{
    //         fibonacciArray.push(fibonacciLastValue + fibonacciAlmostLastValue);
    //     };
    // }
    return fibonacciArray;
  }

console.log(fibonacci(10));


  module.exports = fibonacci;

