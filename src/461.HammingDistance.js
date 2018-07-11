// https://leetcode.com/problems/hamming-distance/description/

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {

  return (x ^ y).toString(2).split('').reduce((sum, v) => {
    return sum + +v;
  }, 0);

};
