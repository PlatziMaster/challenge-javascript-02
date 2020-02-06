const fibonacci = (n) => {
  const ary = Array(n).fill(1,0,n);

  ary.forEach((val, index, ar) => 
    index >= 2 ? ar[index] = ar[index - 2] + ar[index - 1] : ''
  );
  
  return ary;
};

module.exports = fibonacci;