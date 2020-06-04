const fibonacci = (n) =>{ 
 
    let arr=[1];
    let num1=1;
    let num=0;
    for (let index = 0;n>1 && index <= n-2; index++) {
      newNum=num+num1;
      arr.push(newNum);
      num=num1;
      num1=newNum

    }
    return arr;
};


  module.exports = fibonacci;