const fibonacci = (n) => {

  const sequence = [0, 1];
  for(let i = 0; i < n - 1; i++) {
    let newNumber = 0;
    newNumber = sequence[i] + sequence [i + 1];
    sequence.push(newNumber);
  }
  sequence.shift();
  return sequence;
  }

  module.exports = fibonacci;