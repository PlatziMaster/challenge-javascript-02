const fibonacci = (n) => {
  const sequence = [];
  for(let i=0; i<n; i++) {
    if(i === 0 || i === 1) sequence.push(1);
    else {
      const currentNumber = sequence[i-1] + sequence[i-2];
      sequence.push(currentNumber);
    }
  }
  return sequence;
}

module.exports = fibonacci;
