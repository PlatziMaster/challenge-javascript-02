const fibonacci = (n) => {
	let secuencia = []
	for (let i = 0; i < n; i++) {
    if (i <= 1) {
      secuencia[i] = 1
    } else {
      const ultimo = secuencia[i - 1]
      const penultimo = secuencia[i - 2]
      secuencia[i] = penultimo + ultimo
    }
	}
	return secuencia
}


module.exports = fibonacci;