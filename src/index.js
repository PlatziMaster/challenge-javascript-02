const fibonacci = (n) => {
  var arrayFib = [];
 
  for(let i=0; i<n; i++){
    if(i===0){
            arrayFib.push(i+1);
    }else if(i===1){
            arrayFib.push(i);
    }else{
      arrayFib.push(arrayFib[i-2] + arrayFib[i-1]);
    }
  }  
 
  return arrayFib;
}


  module.exports = fibonacci;