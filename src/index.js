const fibonacci = n => {
	if (n == 1) {
		return [1];
	} else if (n > 1) {
		let serie = [1];
		for (let index = 1; index < n; index++) {
			serie.push((serie[index - 1] || index) + (serie[index - 2] || 0));
		}
		return serie;
	} else {
		return [];
	}
};

module.exports = fibonacci;
