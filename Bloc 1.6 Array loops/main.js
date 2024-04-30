// Exercici 1

const names = [
  "Ezequiel",
  "Javier",
  "Manuel",
  "Marta",
  "Juan Manuel",
  "Camila",
  "Leah",
  "Maite",
];

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

names.forEach((name) => console.log(name));

// Exercici 2

for (const el of names) {
  console.log(el);
}

// Exercici 3

const numPares = numbers.filter((num) => num % 2 === 0);

// Exercici 4

let obj = { nom: "Ona", edat: 25, ciutat: "Barcelona" };

for (const prop in obj) {
  console.log(`${prop}: ${obj[prop]}`);
}

// Exercici 5

for (const num of numbers) {
  console.log(num);
  if (num === 5) {
    break;
  }
}

// Exercici 6

for (const [i, name] of names.entries()) {
  console.log(`Nombre ${name} con index ${i}`);
}
