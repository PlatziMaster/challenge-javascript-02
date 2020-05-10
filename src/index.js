const fibonacci = (n) => {
  let arrayFibonacci = [0,1];
  for(let i = 2;i <= n;i++){
    arrayFibonacci[i]= arrayFibonacci[i - 1] + arrayFibonacci[i - 2]
  }
  arrayFibonacci.shift();
  return arrayFibonacci; 
  }


  module.exports = fibonacci;
