// https://leetcode.com/problems/fizz-buzz/description/

/**
 * @param {number} n
 * @return {string[]}
 */
const FIZZ = 'Fizz';
const BUZZ = 'Buzz';

var fizzBuzz = function (n) {

  return Array(n).fill(1).map((v, index) => {
    const n = index + 1;
    const f = n % 3 === 0 ? FIZZ : '';
    const b = n % 5 === 0 ? BUZZ : '';
    const c = f + b;

    return c === '' ? c + n : c;
  });

};
