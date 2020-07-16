const fibonacci = (n) => {
  const secuence = [1, 1]
  
  if(n == 1) {
    secuence.pop()
  } else {
    for(let i = 2; i < n; i++) {
      secuence.push(secuence[secuence.length-1] + secuence[secuence.length-2])
    }
  }
  return secuence
}

module.exports = fibonacci;