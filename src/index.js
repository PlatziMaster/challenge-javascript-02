const fibonacci = (n) => {

  if (n<=1)  return [1];

  let anterior = fibonacci(n - 1);
  let longitudArray = anterior.length;

  // Para que f(2) no genere un typo ponemos cero 
  //por defecto a f(0) ya que no lo piden en el array
  (!anterior[longitudArray - 2]) ? casilla2 = 0 : casilla2 = anterior[longitudArray - 2];
     

  anterior.push(anterior[longitudArray - 1] +  casilla2 );

  return anterior;
  
}

module.exports = fibonacci;