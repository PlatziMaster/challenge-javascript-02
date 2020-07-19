
const fibonacci = (n) => {
  let arrayFb =[1, 1]
  for(var i = 0; i < n ; i++){
    if(i === 0) {
      arrayFb =[1];
    } if(i === 1){
      arrayFb =[1, 1];
    } else if(i > 1) {
      arrayFb[i] = (arrayFb[i-1] + arrayFb[i-2])
    } 
  }

  return arrayFb
}

module.exports = fibonacci;
