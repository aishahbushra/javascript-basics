const createPerson = (name, age) => {
   name: 'Frank'
   age: 79
};

const getName = object => {
  return object.name;
};

const getProperty = (property, object) => {
  return object.age;
};

const hasProperty = (property, object) => {
  if(object[property]) {
    return true;
  } else {
    return false;
  }
};

const isOver65 = person => {
if (person.age > 65) {
  return true;
} else {
  return false;
}

};

const getAges = people => {
    const mappedArr = people.map(function(person) {
      return person.age;
    });
    return mappedArr;
};

const findByName = (name, people) => {

};


const findHondas = cars => {
  // your code here
};

const averageAge = people => {
  // your code here
};

const createTalkingPerson = (name, age) => {
  // your code here
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
};
