const fibonacci = (n) => {    
  const result = [0 , 1];
  if(n === 1) return [1];

  for (let i = 2; i <= n; i++) {
    result.push(result[(i - 1)] + result[(i - 2)])    
  }  
  result.shift()
  return result;    
}

module.exports = fibonacci;