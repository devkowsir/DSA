// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let maxProfit = 0;
  for (let i = prices.length - 1; i > 0; i--) {
    const profitOfBuyingYesterday = prices[i] - prices[i - 1];
    if (profitOfBuyingYesterday > 0) maxProfit += profitOfBuyingYesterday;
  }
  return maxProfit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([1, 2, 3, 4, 5]));
console.log(maxProfit([7, 6, 4, 3, 1]));
