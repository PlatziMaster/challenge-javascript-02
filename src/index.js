const fibonacci = (n) => {
  const fArray = [n];
  for(let i = 0; i < n; ++i){
    (i==0 || i==1) ? fArray[i] = 1 :
    fArray[i] = fArray[i-1] + fArray[i-2];
  }
  return fArray;
}


module.exports = fibonacci;