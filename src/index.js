const fibonacci = (n) => {
      const finalResult = [1];
      for(i = 1; i < n; i++){
        if(finalResult.length < 2){
          finalResult.push(i);
        }else{          
          const numberToPush = finalResult[finalResult.length-1] + finalResult[finalResult.length-2]
          finalResult.push(numberToPush);
        }
      }
      return finalResult;
  }


  module.exports = fibonacci;

  