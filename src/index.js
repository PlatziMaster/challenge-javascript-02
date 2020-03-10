const fibonacci = (n) => {
    let fibArray = [];
    for (let i = 1; i < n + 1; i++) {
      fibArray.push(recursive(i));
    }
  
    return fibArray;
  };
  
  let recursive = function(i) {
    if (i < 2) {
      return i;
    }
    else {
      return recursive(i - 1) + recursive(i - 2);
    }
  };
  
  console.log(fibonacci(9));

module.exports = fibonacci;