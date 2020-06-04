const fibonacci = (n) => {
  const serieFibo = [];
  let lastValue = 0;
  let currentValue = 1;
  let nextValue;

  if (n < 2) {
    serieFibo.push(n);
  } else {
    for (let i = 0; i < n; i++) {
      nextValue = lastValue + currentValue;
      lastValue = currentValue;
      currentValue = nextValue;
      serieFibo.push(lastValue);
    }
  }

  return serieFibo;
};

module.exports = fibonacci;
