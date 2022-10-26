export const generatePrices = (length) => {
  let prices = [];
  for (let i = 0; i < length; i++) {
    prices.push(Math.floor(Math.random() * 10) + 1);
  }
  return prices;
};
