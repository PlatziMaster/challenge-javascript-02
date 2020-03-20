const fibonacci = (n) => {

    let array = [];
    let num1 = 1;
    let num2 = 1;

    if (n === 1) {

        array.push(num1)
        return array;

    } else if (n === 2) {

        array.push(num1, num2);
        return array;

    } else {

        let add = num1 + num2;
        array.push(num1, num2);

        for (let i = 2; i < n; i++) {
            add = num1 + num2;
            array.push(add);

            num1 = num2;
            num2 = add;
        }

        return array;

    }

}

module.exports = fibonacci;