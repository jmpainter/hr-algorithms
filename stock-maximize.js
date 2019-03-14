function stockMax(prices) {
  // start at day one, find max after
  let totalProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    const nextMaxIndex = findMaxIndex(prices, i);
    totalProfit += getMaxProfit(prices.slice(i, nextMaxIndex + 1));
    i = nextMaxIndex;
  }
  return totalProfit;
}

function findMaxIndex(arr, index) {
  let max = 0;
  let maxIndex = 0;
  for (let i = index; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
      maxIndex = i;
    }
  }
  return maxIndex;
}

function getMaxProfit(arr) {
  let costOfShares = 0;
  let numShares = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    costOfShares += arr[i];
    numShares++;
  }
  return arr[arr.length - 1] * numShares - costOfShares;
}

console.log(stockMax([1, 2, 100, 1, 2, 100]));
