/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {

  const help = (array, curr) => {
      if (curr >= n) {
          return array;
      }

      const result = [];
      for (const element of array) {
          if (Array.isArray(element)) {
              result.push(...help(element, curr + 1));
          } else {
              result.push(element);
          }
      }

      return result;
  };

  return help(arr, 0);

};
