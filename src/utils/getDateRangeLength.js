export const getDateRangeLength = (start, end) => {
  const timeDifference = end.getTime() - start.getTime();
  return Math.floor(timeDifference / (1000 * 3600 * 24));
};
