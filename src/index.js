const fibonacci = (num) => {
  let arrnum = [];
  for (let i = 0; i < num; i++) {
    arrnum.push(i == 0 ? 1 : arrnum[i - 2] + arrnum[i - 1] || 1);
  }
  return arrnum;
};

module.exports = fibonacci;
