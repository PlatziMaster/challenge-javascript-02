const fibonacci = (n) => {
    let n1, n2, n3;
    let array = [];

    for (var i = 1; i <= n; i++) {


        if (i == 1 || i == 2) { // Si está en el en intento 1 o 2, numero 1 toma valor de 0 y numero 2 toma valor de 1
            n1 = 0;
            n2 = 1;
            n3 = n1 + n2; // n3 = 1
            array.push(n3); // [1]
            n1 = n2; // n1 = 1
            n2 = n3; // n2 = 1
        } else {
            n3 = n1 + n2; // n3 = 2 (1+1)
            array.push(n3) // [1,1,2]
            n1 = n2; // n1 = 1
            n2 = n3; // n2 = 2
            // y se vuelve a repetir hasta n veces por lo que seguiria la serie fibonacci sin problemas
        }
    }
    return array;
}


module.exports = fibonacci;