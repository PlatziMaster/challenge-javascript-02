const fibonacci = ( n ) => {
  let a = 0, b = 1, c = 1, fibonacciArray = [];
	for ( let i = 0; i < n; i++ ) {
		a = b;
		b = c;
		c += a;
		fibonacciArray.push ( a );
	};
    return fibonacciArray;
}

module.exports = fibonacci;