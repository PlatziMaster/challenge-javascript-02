const fibonacci = (n) => {
  if (n === 0) return 0
  let arreglo = []
  let a = 1
  let b = 1
  let c
  for (let i = 0; i < n; i++) {
    arreglo.push(a)
    c = a + b
    a = b
    b = c
  }
  return arreglo
  }

  module.exports = fibonacci;