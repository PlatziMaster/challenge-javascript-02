const fibonacci = (n) => {

  return repeat(n, fibonacciFormule);

  function repeat(times, action){
    let result=[];
    for(let i=1; i<=times; i++){
      number =action(i);
      result.push(number);
    }
    return result;
  }

  function fibonacciFormule(f){
    if(!this.cache){
      this.cache = {}
    }

    if(this.cache[f]){
      return this.cache[f]
    }

    if(f <= 0){
      return 0;
    }
    else if(f===1){
      return 1;
    }
    else{
      this.cache[f] = (fibonacciFormule(f-1) + fibonacciFormule(f-2));
      return this.cache[f];
    }
  }
}



module.exports = fibonacci;