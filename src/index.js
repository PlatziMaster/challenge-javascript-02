  const fibonacci = (n) => {
      var arrayFibonnaci=[]

      for(var i = 0; i < n; i++)
      {
        if(i === 0 || i === 1)
          {
            arrayFibonnaci[i]=1;
          }else if(i>1)
            {
              arrayFibonnaci[i] = arrayFibonnaci[i-1] + arrayFibonnaci[i-2];
            }
      }
      return arrayFibonnaci;
      }
        


  module.exports = fibonacci;
