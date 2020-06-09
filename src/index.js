const fibonacci = ( n ) => {
  let valueA = 0, valueB = 1, valueC = 1, fibonacciArray = [];
	for ( let i = 0; i < n; i++ ) {
		valueA = valueB;
		valueB = valueC;
		valueC += valueA;
		fibonacciArray.push ( valueA );
	};
    return fibonacciArray;
}


module.exports = fibonacci;