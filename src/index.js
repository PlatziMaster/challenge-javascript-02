const fibonacci = (n) => {
   
  if(n == 1){
    arrFibonacci = [];
    arrFibonacci.push(1);
   /* let num1,num2;
    num1 = arrFibonacci[0];
    num2 = arrFibonacci[1];
    num3 = num1 + num2;
    arrFibonacci.push(num3)*/
    
  }else if(n == 2){
    for(i=0;i<n;i++){
      arrFibonacci = [];
    arrFibonacci.push(1,1);
    }
  }else{
    arrFibonacci = [1,1];
    for(i=2;i<n;i++){
      //arrFibonacci = [1,1];
      //arrFibonacci.push(1,1);
      num1 = arrFibonacci[arrFibonacci.length -1];
      num2 = arrFibonacci[arrFibonacci.length -2];
      num3 = num1 + num2;
      arrFibonacci.push(num3);
   }
  }
  return arrFibonacci;
}


  module.exports = fibonacci;