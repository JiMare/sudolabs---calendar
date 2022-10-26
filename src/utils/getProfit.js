export const getProfit = (prices) => {
  let profit = 0;
  let buyIndex, sellIndex;
  for (let i = 0; i < prices.length - 1; i++) {
    let start = prices[i];
    let bestSell = Math.max(...prices.slice(i + 1));
    if (bestSell - start > profit) {
      profit = bestSell - start;
      buyIndex = i;
      sellIndex = prices.indexOf(bestSell);
    }
  }
  return {
    profit,
    buyIndex,
    sellIndex,
  };
};
