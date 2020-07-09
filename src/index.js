const fibonacci = (n) => {
  
  var serieFibonacci = [];
  for (let i = 0; i < n; i++) {
      if(i === 0 || i === 1){
        serieFibonacci[i] = 1;
      } else if(i>1){
        serieFibonacci[i] = serieFibonacci[i-1] + serieFibonacci[i-2];
      }
    }

    return serieFibonacci;
  }


  module.exports = fibonacci;