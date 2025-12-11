export const formatPrice = (price) => {
  if (price === null || price === undefined) return "N/A";
  return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(price);
};

export const formatMarketCap = (marketCap) => {
  if (marketCap === null || marketCap === undefined) return "N/A";

  if (marketCap >= 1e12) {
    return `₹${(marketCap / 1e12).toFixed(2)}T`;
  } else if (marketCap >= 1e9) {
    return `₹${(marketCap / 1e9).toFixed(2)}B`;
  } else if (marketCap >= 1e6) {
    return `₹${(marketCap / 1e6).toFixed(2)}M`;
  } else if (marketCap >= 1e3) {
    return `₹${(marketCap / 1e3).toFixed(2)}K`;
  } else {
    return `₹${marketCap.toFixed(2)}`;
  }
};