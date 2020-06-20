const fibonacci = (n) => {
  var array = [];

  for (let i = 0; i < n; i++) {
    if (i == 1 || i == 0) {
      array.push(1);
      continue;
    }
    array.push(array[i-1]+array[i-2]);
  }
  return array;
  }


  module.exports = fibonacci;