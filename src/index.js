const fibonacci = (n) => {
  let  serie = [];
for (let i = 0; i < n ; i++) {
    if (i<= 1) {
         serie [i]= 1 ;
    } else{
        const penultimo = serie[i -2];
        const ultimo = serie[i- 1 ];
        serie[i] = penultimo + ultimo; 
    }
    }
       return serie;

  }


  module.exports = fibonacci;