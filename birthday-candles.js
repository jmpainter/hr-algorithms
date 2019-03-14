function birthdayCakeCandles(ar) {
  let max = 0;
  for (let num of ar) {
    if (num > max) {
      max = num;
    }
  }
  return ar.filter(ele => ele === max).length;
}
