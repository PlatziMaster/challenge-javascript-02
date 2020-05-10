// 1, 1, 2, 3, 5, 8, 13 ...
//cunado n >=2)
//arrayFido = arrayFido(n-1) + arrayFido(n+2) 
const fibonacci = (n) => {
  let arrayFibonacci = [0,1];
  for(let i = 2;i <= n;i++){
    arrayFibonacci[i]= arrayFibonacci[i - 1] + arrayFibonacci[i - 2]
  }
  arrayFibonacci.shift();
  return arrayFibonacci; 
  }


  module.exports = fibonacci;