const fibonacci = (n) => {
    // Casos Iniciales
      let A = 0
      let B = 1
    // Array de la Serie
      let Serie = []

      //Primeros casos
      if (n == 0) {
        Serie.push(A)
      }else if (n >= 1) {
        Serie.push(B)
      }

      
    //Iteración 
      let Z = 1
      while (Z <= n-1) {
        let C = A + B 
        Serie.push(C)
        A = B
        B = C
        Z++
      }

  return Serie
}


  module.exports = fibonacci;