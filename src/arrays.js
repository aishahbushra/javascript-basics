const getNthElement = (index, array) => {
  const arrLength = array.length;
  let positionToLookFor;
  if (index + 1 > arrLength) {
    positionToLookFor = index - arrLength;
  } else {
    positionToLookFor = index;
  }
  return array[positionToLookFor];
};

const arrayToCSVString = array => {
  return array.toString();

};

const csvStringToArray = string => {
  return string.split(',');
};

const addToArray = (element, array) => {
  array.push(element);
};

const addToArray2 = (element, array) => {
  const newArray = [...array]
  newArray.push(element);
  return newArray;
};

const removeNthElement = (index, array) => {
index = array.indexOf("cockerel")
if (index > -1) { array.splice(index, 1) }
return array;
};

const numbersToStrings = numbers => {
return numbers.map(String);
};

const uppercaseWordsInArray = strings => {
  const mappedArr = strings.map(function(string) {
    return string.toUpperCase();
  });
  return mappedArr;
};

const reverseWordsInArray = strings => {
  const backwardsArray = strings.map(function(string) {
    return string.split("").reverse().join("");
  });
  return backwardsArray;
};


const onlyEven = numbers => {
  const evenNumbers = numbers.filter(function(number) {
    return number % 2 == 0;
  });
  return evenNumbers;
};

const removeNthElement2 = (index, array) => {
  const newArray = [...array]
  newArray.splice(2, 1);
  return newArray;
};

const elementsStartingWithAVowel = strings => {
  const vowelWords = strings.filter(function(string) {
    return (string.match('^[aeiouAEIOU].*'))
  });
  return vowelWords
};

const removeSpaces = string => {
  return string.replace(/\s/g, ""); // space remover from strings (regex)
};

const sumNumbers = numbers => {
  var sum = numbers.reduce(function(a, b){
      return a + b;
  }, 0);
  return sum;
};

const sortByLastLetter = strings => {
  const reverseString = (item) => item.split('').reverse().join('');
  return strings.map(reverseString).sort().map(reverseString);

};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};