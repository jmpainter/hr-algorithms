function compareTriplets(a, b) {
  let aPoints = 0;
  let bPoints = 0;
  for (let i = 0; i < 3; i++) {
    if (a[i] > b[i]) {
      aPoints++;
    } else if (b[i] > a[i]) {
      bPoints++;
    }
  }
  return [aPoints, bPoints];
}

console.log(compareTriplets([5, 6, 7], [3, 6, 10]));
