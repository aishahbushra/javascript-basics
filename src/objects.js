const createPerson = (name, age) => {
  return {
    name: name,
    age: age
  };
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
 return people.find(obj => obj.name === name);
};


const findHondas = cars => {
  return cars.filter(obj => obj.manufacturer === "Honda");
};

const averageAge = people => {
    const numOfPeople = people.length;
    const arrayOfAges = people.map(person => person.age);
    const sumOfAges = arrayOfAges.reduce((total, currentValue) => total + currentValue);
    const averageOfAges = sumOfAges / numOfPeople;
    return averageOfAges;
};

const createTalkingPerson = (name, age) => {
  return {
    name: name,
    age: age,
    introduce: strangersName => {
      return `Hi ${strangersName}, my name is ${name} and I am ${age}!`;
    }
  };
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
