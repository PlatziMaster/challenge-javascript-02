const fibonacci = (n) => {
	const array = [];
	array.push(n);
	array.push(n + 1);
	for (let i = 0; array.length <= 12; i++) {
		const number = array[array.length - 2] + array[array.length - 1];
		array.push(number);
	}
	return array;
};

fibonacci(0); // 0,  1,  1,  2,  3,  5, 8, 13, 21, 34, 55, 89, 144

module.exports = fibonacci;
