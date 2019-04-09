function kangaroo(x1, v1, x2, v2) {
  if ((x1 < x2 && v1 < v2) || (x2 < x1 && v2 < v1)) {
    return 'NO';
  }

  if (v1 > v2) {
    while (x1 < x2) {
      x1 += v1;
      x2 += v2;
    }
  } else {
    while (x2 < x1) {
      x1 += v1;
      x2 += v2;
    }
  }

  return x1 === x2 ? 'YES' : 'NO';
}

console.log(kangaroo(0, 3, 4, 2));
