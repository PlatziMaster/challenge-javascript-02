const fibonacci = n => {
  const res = [];
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    if (i === 1) {
      res.push(i);
    } else if (i === 2) {
      res.push((sum += 1));
    } else {
      res.push(res[res.length - 1] + res[res.length - 2]);
    }
    console.log(res);
  }
  return res;
};

module.exports = fibonacci;
