// Exercici 1 y 2

const array = [1, 2, 3, 4];

const mappedArr = array.map((num) => num * num);
const filteredArr = array.filter((num) => num % 2 === 0);

// Exercici 3

const array2 = [1, 10, 8, 11];

const found = array2.find((num) => num > 10);

// Exercici 4

const array3 = [13, 7, 8, 21];
const sumOfAll = array3.reduce((a, b) => a + b, 0);

// Exercici 5

const array4 = [1, 3, 7, 10, 15, 17, 11, 5, 8, 12, 9];

const processArray = (arr) => {
  return arr
    .filter((num) => num >= 10)
    .map((num) => num * 2)
    .reduce((a, b) => a + b, 0);
};

// Exercici 6

const array5 = [11, 12, 13, 14];

const everyNum = array5.every((num) => num > 10);
const someNum = array5.some((num) => num > 10);
