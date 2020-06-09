const fibonacci = (n) => {
    let fibonacci = [];
    for(let i = 0; i < n; i++){
      if(i === 0){
        fibonacci.push(1)
      }else{
        fibonacciCalc = (fibonacci[i-2] + fibonacci[i-1]) || 1
        fibonacci.push(fibonacciCalc)
      }
      //Shorter solution
      // (i === 0) ? fibonacci.push(1) : fibonacci.push(fibonacci[i-2] + fibonacci[i-1] || 1)
    }
    return fibonacci;
  }

  module.exports = fibonacci;