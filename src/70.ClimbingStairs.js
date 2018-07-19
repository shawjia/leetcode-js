// https://leetcode.com/problems/climbing-stairs/description/

const cache = {};

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n < 4) {
    return n;
  }

  let o = n - 2;
  let p = n - 1;

  if (!cache[o]) {
    cache[o] = climbStairs(o);
  }

  if (!cache[p]) {
    cache[p] = climbStairs(p);
  }

  cache[n] = cache[o] + cache[p];

  return cache[n];
};
