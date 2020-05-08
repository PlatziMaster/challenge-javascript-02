const fibonacci = (fn) => {
  let fb = [1, 1];

  if (fn === 1) {
    return [1];
  }
  if (fn === 2) {
    return fb;
  }

  for (let i = 2; i < fn; i++) {
    fb.push(fb[fb.length - 2] + fb[fb.length - 1]);
  }

  return fb;
}

module.exports = fibonacci;