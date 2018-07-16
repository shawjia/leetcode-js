// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/

/**
 * @param {number[]} prices
 * @return {number}
 */
// FIXME: too slow...
var maxProfit = function (prices) {
  let profit = 0;

  prices.forEach((price, index) => {
    const tmp = Math.max.apply(null, prices.slice(index + 1)) - price;
    if (tmp > profit) {
      profit = tmp;
    }
  });

  return profit;
};

// good solution
var maxProfit2 = function (prices) {
  let min = Infinity;
  let max = 0;

  for (let i = 1; i < prices.length; i++) {
    min = Math.min(min, prices[i - 1]);
    max = Math.max(max, prices[i] - min);
  }

  return max;
};
