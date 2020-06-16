const fibonacci = (n) => {    
  const seq = [0,1];
  for(let i = 0; i < n-1; i++){
    let newValue = 0; 
    newValue = seq[i]+seq[i+1];
    seq.push(newValue);
  }
  seq.shift();
  return seq;
}  




console.log(fibonacci(6));

  module.exports = fibonacci;