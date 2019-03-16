function nonDivisibleSubset(k, S) {
  const subsets = combine(S, 2);
  subsets.sort((a, b) => b.length - a.length);
  // go through subsets, see max length subset that satisfies isNotDivisible

  for (let subSet of subsets) {
    if (isNotDivisible(subSet, k)) {
      return subSet.length;
    }
  }
  return -1;
}

// checks if the sum of any 2 numbers is not evenly divisible by k
function isNotDivisible(set, k) {
  const sums = new Set();
  for (let i = 0; i < set.length; i++) {
    for (let j = i + 1; j < set.length; j++) {
      sums.add(set[i] + set[j]);
    }
  }
  for (let value of sums) {
    if (value % k === 0) {
      return false;
    }
  }
  return true;
}

// get all combinations of array
var combine = function(a, min) {
  var fn = function(n, src, got, all) {
    if (n == 0) {
      if (got.length > 0) {
        all[all.length] = got;
      }
      return;
    }
    for (var j = 0; j < src.length; j++) {
      fn(n - 1, src.slice(j + 1), got.concat([src[j]]), all);
    }
    return;
  };
  var all = [];
  for (var i = min; i < a.length; i++) {
    fn(i, a, [], all);
  }
  all.push(a);
  return all;
};

console.log(nonDivisibleSubset(4, [19, 10, 12, 10, 24, 25, 22]));
