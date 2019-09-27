const findLastIndex = arr => {
  return arr.length > 0 ? arr[arr.length - 1].index + 1 : 1;
};
export default findLastIndex;
