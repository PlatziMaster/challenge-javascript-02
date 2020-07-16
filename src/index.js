const fibonacci = (n) => {

  let fibonacciArray = [0 , 1], temp

  while (n > 0) {

    temp = fibonacciArray[fibonacciArray.length - 1] + fibonacciArray[fibonacciArray.length - 2]
    fibonacciArray.push(temp)
    n--

  }

  fibonacciArray.pop()
  fibonacciArray.shift()
  
  return fibonacciArray
}


module.exports = fibonacci;