const fibonacci = (n, x) => {

    let a = n[0]
    let b = n[1]
    let next,
    count = 2

    while (count < x ) {
      next = a + b
      a = b
      b = next 
      n.push(next)
      count++
    }

    return n
}





  module.exports = fibonacci;
