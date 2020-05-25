const fibonacci = (n) => {
  const sequence = []
  let biggerNumber = 1
  let lowerNumber = 0
  let temporary
  sequence.push(biggerNumber)
  while(sequence.length < n){
    temporary = biggerNumber
    biggerNumber += lowerNumber
    lowerNumber = temporary
    sequence.push(biggerNumber)
  }
  return sequence
}


  module.exports = fibonacci;