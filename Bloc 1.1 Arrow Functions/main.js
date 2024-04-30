// Exercici 1

const add = (a, b) => {
  return a + b;
};

// Exercici 2

const randomNumber = () => {
  return Math.floor(Math.random() * 101);
};

// Exercici 3

class Person {
  constructor(name) {
    this.name = name;
  }
  greet = () => {
    console.log(`Hola, ${this.name}`);
  };
}

const persona = new Person("Carlos");
persona.greet();

// Exercici 4

const printNumbers = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
};

printNumbers([1, 3, 4, 5]);

// Exercici 5

const waitFunction = () => {
  setTimeout(() => {
    console.log("I am delayed 3 seconds.");
  }, 3000);
};

waitFunction();
