const fibonacci = (n) => {
	var entero = parseInt(n)
	var array = [1, 1]
	if (n<=1){
		return [1];
	}
	for (var i=2; i< entero ;i++){
		array[i] =array[i-1]+array[i-2]
	}
	return(array)
}
  module.exports = fibonacci;
