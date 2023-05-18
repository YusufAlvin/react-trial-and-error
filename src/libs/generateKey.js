export const generateUniqueKey = (() => {
  let counter = 0;

  return (prefix) => {
    counter++;
    return `${prefix}-${counter}`;
  };
})();