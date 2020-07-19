
const fibonacci = (n) => {
  const arrayFb = [1, 1]
  if(n === 1) {
    return [1];
  } if (n === 2) {
    return [1, 1];
  } if (n > arrayFb.length) {
    for (let i = 0; i < n - 2; i++) {
      arrayFb.push(arrayFb[i] + arrayFb[i + 1]);
      return arrayFb;
    }
    return arrayFb;
  }
}
module.exports = fibonacci;
