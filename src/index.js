const fibonacci = (n) => {
  const sequence = []
  let a = 0
  let b = 1
  let i = 0
  while (i < n) {
    sequence.push(b)
    const tmp = b
    b = a + b
    a = tmp
    i++
  }
  return sequence
}

module.exports = fibonacci;