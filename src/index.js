const fibonacci = (n) => {
  const fArray = [];
  for(let i = 0; i < n; ++i){
    fArray[i] = (i < 2) ? 1 : fArray[i-1] + fArray[i-2]
  }
  return fArray;
}


module.exports = fibonacci;