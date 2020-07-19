const fibonacci = (n) => {
  let fibonacci = []
  a = 0
  b = 1
  result = b
  for (i = 1; i < 11; i++)
    fibonacci.push (result)
    result = a+b
    a = b
    b = result
  }


  module.exports = fibonacci;
