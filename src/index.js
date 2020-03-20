const fibonacci = (n) => {

    let array = [];
    let num1 = 0;
    let num2 = 1;

    let add = num1 + num2;
    array.push(num1, num2);

    for (let i = 2; i < n; i++) {
        add = num1 + num2;
        array.push(add);

        num1 = num2;
        num2 = add;
    }
    return array
}

module.exports = fibonacci;