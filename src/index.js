const fibonacci = (num) => {
  let arrnum = [];
  for (let i = 0; i < num; i++) {
    i == 0 ? arrnum.push(1) : arrnum.push(arrnum[i - 2] + arrnum[i - 1] || 1);
  }
  return arrnum;
};

module.exports = fibonacci;
