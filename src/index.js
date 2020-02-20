const fibonacci = n => {
	let serie = [];

	for (i = 0; i < n; i++) {
		if (i === 0) {
			serie.push(i + 1);
		} else if (i === 1) {
			serie.push(i);
		} else {
			serie.push(serie[i - 1] + serie[i - 2]);
		}
	}
	return serie;
};

module.exports = fibonacci;
