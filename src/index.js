// Generators are a special class of functions that simplify the task of writing iterators.
function* fib(n, current = 1, next = 1) {
 // if (n === 0) {
   // return 0;
  // }
  if (n === 0) {
    return 1;
   }
 // segun la este hilo https://github.com/PlatziMaster/challenge-javascript-02/issues/22 no se considerara el 0 
  yield current;
  yield* fib(n - 1, next, current + next);
}

const fibonacci = (n) => [...fib(n)]

module.exports = fibonacci;