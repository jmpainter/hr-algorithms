function plusMinus(arr) {
  let positive = 0;
  let negative = 0;
  let zero = 0;
  for (let num of array) {
    if (num === 0) {
      zero++;
    } else if (num > 0) {
      positive++;
    } else {
      negative++;
    }
  }
}
