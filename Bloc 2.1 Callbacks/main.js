// Exercici 1

const procesar = (name, callback) => {
  return callback(name);
};

const saludar = (x) => {
  console.log(`Bienvenido, ${x}`);
};

procesar("Eze", saludar);

// Exercici 2

const calculadora = (num1, num2, callback) => {
  let result = callback(num1, num2);
  console.log(`La suma de los números es ${result}`);
};

const callback = (x, y) => {
  return x + y;
};

calculadora(10, 4, callback);

// Exercici 3

const esperarISaludar = (name, callback) => {
  setTimeout(() => {
    callback(name);
  }, 2000);
};

const saludarNombre = (name) => {
  console.log(`Hola, ${name}`);
};

esperarISaludar("Juan Manuel", saludarNombre);

// Exercici 4

const processarElements = (arr, callback) => {
  for (el of arr) {
    callback(el);
  }
};

const processarIndividual = (el) => {
  console.log(`el elemento ${el} ha sido procesado`);
};

processarElements([1, 2, 3], processarIndividual);

// Exercici 5

const processarCadena = (str, callback) => {
  const mayus = str.toUpperCase();
  callback(mayus);
};

const mostrarMayus = (str) => {
  console.log(`La cadena modificada es ${str}`);
};

processarCadena("adiós", mostrarMayus);
