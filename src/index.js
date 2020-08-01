const fibonacci = (n) => {
  let array = [1,1]
  
  for(let i=0;i<n;i++){
    
    let count = array[i]+array[i+1]
    array.push(count)
    
  }
  array.length=n
  return array

}


module.exports = fibonacci;