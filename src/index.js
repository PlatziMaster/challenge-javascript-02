const fibonacci = (n) => {  
  var arrayFibonacci = []
  var valor1 = 1
  var valor2 = 1

  for(let i=1; i<=n; i++) {
    if(i === 1 || i === 2) {
      arrayFibonacci.push(valor1)
    }
    else {
      valor1 = arrayFibonacci[arrayFibonacci.length - 2]
      valor2 =  arrayFibonacci[arrayFibonacci.length - 1]
      
      arrayFibonacci.push(valor1 + valor2)
    }
  }
  return arrayFibonacci
}

module.exports = fibonacci;