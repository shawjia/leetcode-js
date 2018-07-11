// https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/description/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  const max = nums.length;
  const miss = [];
  let num = 1;

  while (num <= max) {
    if (!nums.includes(num)) {
      miss.push(num);
    }

    num++;
  }

  return miss;
};
