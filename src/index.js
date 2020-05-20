const fibonacci = (n) => {
  n++;
  let val = [0, 1];

  for (let i = 2; i < n; i++) {
    val[i] = val[i - 2] + val[i - 1];
  }

  val.shift();
  return val;
};

module.exports = fibonacci;
