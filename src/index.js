const fibonacci = (n) => {
	const array = [];
	if (n === 1) {
		array.push(n);
		return array;
	} else {
		array.push(1);
		array.push(1);
		for (let i = 0; array.length < n; i++) {
			const number = array[array.length - 2] + array[array.length - 1];
			array.push(number);
		}
		return array;
	}
};

// fibonacci(0); // 0,  1,  1,  2,  3,  5, 8, 13, 21, 34, 55, 89, 144
console.log(fibonacci(5));

module.exports = fibonacci;
