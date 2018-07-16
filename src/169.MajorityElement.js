// https://leetcode.com/problems/majority-element/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const times = nums.length / 2;
  const maps = {};

  nums.forEach(num => {
    if (num in maps) {
      maps[num]++;
    } else {
      maps[num] = 1
    }
  });

  return +Object.keys(maps).find(num => {
    return maps[num] >= times;
  });
};
