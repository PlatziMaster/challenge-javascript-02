const data = [];

const fibonacci = (n) => {

  if(data.length > n ){
    return data.slice(0, n);
  } 
  if(n === 1) {
    data.push(0);
  } 
  if(n === 2) {
    data.push(1);
  }
  if(data.length < n){
    for (let index = data.length; index < n; index++) {
      data.push(data[index - 2] + data[index - 1]);
    }
  }
    return data;
  }

module.exports = fibonacci;