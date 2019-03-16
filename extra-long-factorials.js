function extraLongFactorials(n) {
  let total = '1';
  for (let i = 2; i <= n; i++) {
    // sum current i times
    let temp = '0';
    for (let j = 0; j < i; j++) {
      temp = addTwo(temp, total);
    }
    total = temp;
  }
  return total;
}

function addTwo(a, b) {
  let targetLength;
  if (a.length >= b.length) {
    targetLength = a.length;
  } else {
    targetLength = b.length;
  }
  const numArr1 = a
    .padStart(targetLength, '0')
    .split('')
    .map(ele => parseInt(ele, 10));
  const numArr2 = b
    .padStart(targetLength, '0')
    .split('')
    .map(ele => parseInt(ele, 10));
  const sumArr = new Array(numArr1.length).fill(0);
  let carry = 0;
  for (let i = numArr1.length - 1; i >= 0; i--) {
    let localSum = numArr1[i] + numArr2[i] + carry;
    if (localSum >= 10) {
      carry = 1;
      localSum -= 10;
    } else {
      carry = 0;
    }
    sumArr[i] = localSum;
  }
  if (carry === 1) {
    sumArr.unshift(1);
  }
  return sumArr.join('');
}

console.log(extraLongFactorials(6));
// console.log(addTwo(125, 945));
