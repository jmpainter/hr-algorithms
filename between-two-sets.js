function getTotalX(a, b) {
  debugger;
  let totalBetween = 0;
  const maxA = a.sort((a, b) => b - a)[0];
  const maxB = b.sort((a, b) => b - a)[0];

  for (let i = maxA; i <= maxB; i++) {
    let isBetween = true;
    for (let number of a) {
      if (i % number !== 0) {
        isBetween = false;
        break;
      }
    }
    for (let number of b) {
      if (number % i !== 0) {
        isBetween = false;
        break;
      }
    }
    if (isBetween === true) {
      totalBetween++;
    }
  }
  return totalBetween;
}

console.log(getTotalX([2, 6], [24, 36]));
