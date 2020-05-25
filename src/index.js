const fibonacci = (n) => {
  const sequence = []
  let a = 1
  let b = 0
  let tmp
  sequence.push(b)
  sequence.push(a)
  while(sequence.length < n){
    tmp = a
    a += b
    b = tmp
    sequence.push(a)
  }
  return sequence
}


  module.exports = fibonacci;