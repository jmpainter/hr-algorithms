function diagonalDifference(arr) {
  debugger;
  let rightSum = 0;
  let leftSum = 0;
  arr.forEach((subArr, index) => {
    rightSum += subArr[index];
    leftSum += subArr[subArr.length - 1 - index];
  });
  return Math.abs(rightSum - leftSum);
}

console.log(diagonalDifference([[11, 2, 4], [4, 5, 6], [10, 8, -12]]));
