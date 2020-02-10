const prompt = require('prompt');

const prompt_attributes = [
  {
    name: 'fibonacci',
    validator: /^[0-9]*$/,
    warning: 'Inavalid data, please enter a number'
  },
  
]


prompt.start()
const fibonacci = (n) => {
  let numeros=[1,1];
  if(n == 1) {
    numeros = [1]
    console.log(numeros)
    return numeros;
  }
  for (let i = 2; i < n; i++) {
      numeros[i] = numeros[i - 2] + numeros[i - 1];
  }
  console.log(numeros)
  return numeros;
}
prompt.get(prompt_attributes, (err, result)=>{
 
  if(err) {
    console.log(err)
    return null
  } else {
    console.log('the fibonacci sequence is: ');

    let fibonacciNumber = result.fibonacci;
    fibonacci(fibonacciNumber)
  }
})



  module.exports = fibonacci;