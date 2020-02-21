const fibonacci = (number) => {
  let n = number
  const result = []
  let a = 0;
  let b = 1;
  let c = 1;
  for ( let i = 1; i <= n; i++) {
    result.push(c)
    c = a + b;
    a = b;
    b = c;  
  }
  return result
}


  module.exports = fibonacci;