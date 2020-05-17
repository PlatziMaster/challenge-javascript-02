const fibonacci = (number) => {
  let sequenceFib = [];

  if (number === 1) {
    sequenceFib.push(1);
  } else {
    sequenceFib = [1, 1];
    for (let i = 0; i < number - 2; i++) {
      sequenceFib.push(sequenceFib[i] + sequenceFib[i + 1]);
    }
  }

  return sequenceFib;
};

module.exports = fibonacci;
