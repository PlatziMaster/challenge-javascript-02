const fibonacci = (n) => {
	//array answer
	let answer = [1];

	//variables
	let Xn_1 = 1;
	let Xn_2 = 0;
	let Xn = 0;

	//conditionals
	if (n === 0) {
		return [0];
	}

	//loop
	for (let i = 2; i <= n; i++) {
		Xn = Xn_1 + Xn_2;

		answer.push(Xn);

		Xn_2 = Xn_1;
		Xn_1 = Xn;
	}

	return answer;
};

module.exports = fibonacci;
