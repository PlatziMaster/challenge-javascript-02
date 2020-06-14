let fiboArray = [];
let lastNumberOne;
let lastNumberTwo = 0;
const fibonacci = (n) => {
  for (let i = 0; i <= n; i++) {
    if(fiboArray.length === 0) {
      fiboArray.push(n);
      lastNumberOne = n
    }
    else{
      let result = lastNumberOne + lastNumberTwo
      lastNumberTwo = lastNumberOne
      lastNumberOne = result
      fiboArray.push(result)
    }
    return fiboArray
  }
  }


  module.exports = fibonacci;