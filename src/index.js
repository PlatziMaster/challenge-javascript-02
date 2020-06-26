const fibonacci = (n) => {
  const arrayFibo = [0, 1];
  for (let i = 0; i < n - 1; i++) {
    let nextNumber = 0;
    nextNumber = arrayFibo[i] + arrayFibo[i + 1];
    arrayFibo.push(nextNumber);
  }	  
  arrayFibo.shift();
  return arrayFibo;
}

  module.exports = fibonacci;