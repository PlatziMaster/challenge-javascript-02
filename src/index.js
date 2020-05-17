const fibonacci = (n) => {
  let fibArray = [];
  if(n === 1){
    fibArray.push(1)
  }
  for(let i = 1; i < n; i++){
      if(i <= 1){
        fibArray.push(1);
      }
      const FirstlastNum = fibArray[i - 1]
      const SecondLastNum = fibArray[i - 2] === undefined ? 0 : fibArray[i - 2];
      fibArray.push(FirstlastNum + SecondLastNum);
  }

  return fibArray
}

module.exports = fibonacci;