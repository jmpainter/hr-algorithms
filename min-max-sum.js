function miniMaxSum(arr) {
  debugger;
  let maxSum = -Infinity;
  let minSum = Infinity;
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = 0; j < arr.length; j++) {
      if (i !== j) {
        sum += arr[j];
      }
    }
    if (sum > maxSum) {
      maxSum = sum;
    }
    if (sum < minSum) {
      minSum = sum;
    }
  }
  process.stdout.write(minSum + ' ' + maxSum);
}

miniMaxSum([1, 2, 3, 4, 5]);
