const negate = a => {
  return !a;
};

const both = (a, b) => {
  return a && b;
};

const either = (a, b) => {
  return a || b;
};

const none = (a, b) => {
  return !a && !b;
};

const one = (a, b) => {
return !a == b;
};

const truthiness = a => {
return a ? true : false;
};

const isEqual = (a, b) => {
  return a === b;
};

const isGreaterThan = (a, b) => {
  return a > b;
};

const isLessThanOrEqualTo = (a, b) => {
  return a <= b;
};

const isOdd = a => {
  return a % 2 == 1;
};

const isEven = a => {
  return a % 2 == !1;
};

const isSquare = a => {
  return Number.isInteger(Math.sqrt(a));
};

const startsWith = (char, string) => {
  return string.startsWith("a");
};

const containsVowels = string => {
  return (string.match('[aeiouAEIOU]'))!==null;
};

const isLowerCase = string => {
  return string.includes("A") == false;
};

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase
};
