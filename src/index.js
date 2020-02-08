const fibonacci = (n) => {
  let answer=[n-1]
  let e=1, r=0,i,c=0
  while(n>0){
    i=e;
    answer[c]=i
    e=e+r;
    r=i 
    n--
    c++
  }
  return answer
}


  module.exports = fibonacci;