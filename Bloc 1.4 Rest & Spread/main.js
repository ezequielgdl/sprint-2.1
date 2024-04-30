// Exercici 1

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];

// Exercici 2

const suma = (...numeros) => {
  let result = 0;
  for (num of numeros) {
    result += num;
  }
  return result;
};

console.log(suma(3, 4, 5, 6));

// Exercici 3

let object1 = {
  name: "Jon",
  age: 25,
};

let object2 = {
  ...object1,
};

object2.name = "Roberto";

// Exercici 4

const restArr = [1, 4, 5, 6];
const [a, b, ...rest] = restArr;

console.log(a, b, rest);

// Exercici 5

const spreadFunction = (a, b, c) => {
  return a + b + c;
};

const array1 = [1, 3, 6];

console.log(spreadFunction(...array1));

// Exercici 6

const person1 = {
  name: "Manuel",
  age: 74,
};

const person2 = {
  job: "Vendedor",
  city: "Buenos Aires",
};

const people = {
  ...person1,
  ...person2,
};
