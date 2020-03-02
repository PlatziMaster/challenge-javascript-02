const fibonacci = (num) => {
  let nextNumber = [0, 1];
  for(let i = 2; i <= num; i++){
      nextNumber.push(nextNumber[i - 1] + nextNumber[i - 2]);
    }
    nextNumber.shift(0);
    return nextNumber;
  };

  module.exports = fibonacci;