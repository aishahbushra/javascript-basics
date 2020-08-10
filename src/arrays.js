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
  // your code here
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
  // let array = [numbers];

  array.reduce((accumulator, currentValue, currentIndex, array) => accumulator + currentValue);
}; //

const sortByLastLetter = strings => {
  let origArray =  ["Lannister", "Stark", "Greyjoy", "Targaryen"]
  let splitArray = origArray.split("");

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
