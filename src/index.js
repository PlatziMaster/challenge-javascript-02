const fibonacci = (n) => {
  const fibonacciArray = [1, 1]

  for (let i = 0; i < n; i++) {
    number = fibonacciArray[i] + fibonacciArray[i + 1]
    fibonacciArray.push(number)
  }

  const finalNumber = fibonacciArray.slice(0, n)

  return finalNumber
}; 
    

  module.exports = fibonacci;