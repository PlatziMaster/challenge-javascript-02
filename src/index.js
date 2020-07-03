const fibonacci = (n) => {
  // Se crea el array
  let arrayFibonacci = [];
  for (let i = 0; i < n; i++) {
    // Verificamos si el parametro es  1 
    if (i <= 1) {
      arrayFibonacci.push(1);
    } else {
      //se asigan a variables el primer y el segundo número
      const primerNumero = i - 1;
      const segundoNumero = i - 2;
      let suma =
        arrayFibonacci[primerNumero] +
        arrayFibonacci[segundoNumero];
        arrayFibonacci.push(suma);
    }
  }  
  return arrayFibonacci; 
}// Termina const fibonacci = (n) => 

fibonacci(5); 

  module.exports = fibonacci;