const fibonacci = (n) => {
  let ary = null;

  if ( Number.isSafeInteger(n) ) {
    ary = Array(Math.abs(n)).fill(1);
    ary.unshift(0);
    ary.forEach((v, i, a) => i >= 2 ? a[i] = a[i - 2] + a[i - 1] : '');
  }
    
  return (
    n < 0 
    ? ary.map((v, i) => i%2 === 0 && v !== 0 ? v * -1 : v).reverse()
    : ary
  );
};

module.exports = fibonacci;