// Exercici 1

const potConduir = (edat) => {
  return edat > 18 ? "Pots conduir" : "No pots conduir";
};

// Exercici 2

const compararNums = (num1, num2) => {
  return num1 > num2 ? "num 1 és més gran" : "num 2 és més gran";
};

// Exercici 3

const trobarMaxim = (a, b, c) => {
  return a > b && a > c ? a : b > c ? b : c;
};

console.log(trobarMaxim(6, 4, 10));

// Exercici 4

const parOImpar = (arr) => {
  let pares = [];
  let impares = [];
  for (num of arr) {
    num % 2 === 0 ? pares.push(num) : impares.push(num);
  }
  return `Números pares ${pares}, números impares ${impares}`;
};
