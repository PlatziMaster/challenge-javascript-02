
const fibonacci = (n) => {

	let fib = new Array();

	for(let i=1; i<=n; i++) {
		if (i == 1 || i == 2 ) 
			fib.push(1)

		else
			fib.push(fib[i-2] + fib[i-3]);
	}

	return fib;
}

  module.exports = fibonacci;