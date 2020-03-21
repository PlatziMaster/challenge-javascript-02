const fibonacci = (n) => {
    var a = 0, b = 1, r = b;
    var arr = [];

    arr[0]=r;

    for(var i = 1; i<n; i++){        
      r=a+b;
      a=b;
      b=r;
      arr[i]= r;
    }
    return arr;
  }


  module.exports = fibonacci;