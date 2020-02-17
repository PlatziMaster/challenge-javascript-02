var prompt = require('prompt');
var fibonacci = require('./utils/fibonacci')

prompt.start();
console.log('Ingresa un número que desees saber su fibonacci: ')
prompt.get(['number'], function (err, result) {
  console.log('  Número: ' + result.number);
  console.log('  fibonacci: ' + fibonacci(result.number));
});
