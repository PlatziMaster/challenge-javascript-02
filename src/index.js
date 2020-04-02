let sequence = [];

const fibonacci = (n) => {

  /* if (n == 1) {
    sequence.push(n);
    return sequence;
  } else if (n == 2) {
    sequence.push(1);
    return sequence;
  } else if (n > 2) {
    let sum = sequence[sequence.length-1] + sequence[sequence.length-2];
    sequence.push(sum);
  } */

  let nextNumber = sequence[sequence.length-1] + sequence[sequence.length-2];

  if (isNaN(nextNumber)) {
    sequence.push(1);
  } else {
    sequence.push(nextNumber);
  }

  return sequence;
}


module.exports = fibonacci;