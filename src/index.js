const fibonacci = (n) => {

  let sec = [0,1];
  
  switch (n) {
    case 0:
        sec = [0];
      break;
    
    case 1:
        sec = ['it does not matter',1];
      break
  
    default:
      for (let i = 2; i <= n; i++) {
        let new_number = sec[i - 2] + sec[i - 1]
        sec.push(new_number)
      }
      break;
  }
  sec.shift();
  console.log(sec);
  return sec;
}

fibonacci(2);

module.exports = fibonacci;