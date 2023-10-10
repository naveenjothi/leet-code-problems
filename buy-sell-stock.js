// function calculateProfit(prices) {
//   const minPrice = getMinPrice(prices);
//   const minPriceIndex = prices.indexOf(minPrice);
//   let profit = 0;

//   for (let index = minPriceIndex; index < prices.length; index++) {
//     const currentDayPrice = prices[index];
//     if (minPrice < currentDayPrice) {
//       profit = Math.max(profit, currentDayPrice);
//     }
//   }

//   if (minPrice >= profit) {
//     return 0;
//   } else {
//     return profit - minPrice;
//   }
// }

function calculateProfit(prices) {
  let leftIndex = 0;
  let rightIndex = 1;
  let max_profit = 0;

  while (rightIndex < prices.length) {
    if (prices[leftIndex] < prices[rightIndex]) {
      let profit = prices[rightIndex] - prices[leftIndex];

      max_profit = max_profit + profit;
    }
    rightIndex++;
    leftIndex++;
  }
  return max_profit;
}

console.log(calculateProfit([7, 6, 4, 3, 1]));
