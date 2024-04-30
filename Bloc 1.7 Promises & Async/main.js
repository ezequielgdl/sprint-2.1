// Exercici 1

const promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hola, mon");
  }, 2000);
});

// Exercici 2

promesa.then((result) => {
  console.log(result);
});

// Exercici 3

const promesaAmbReject = (input) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (input === "Hola") {
        resolve("OK: Hola");
      } else {
        reject("No saluda correctamente");
      }
    }, 2000);
  });
};

promesaAmbReject("Holas")
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

// Exercici 4 i 5

const asyncCall = async () => {
  try {
    const result = await promesa;
    console.log(`El resultado es ${result}`);
  } catch (error) {
    console.log(error);
  }
};

asyncCall();

// Exercici 6

const promesa2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hola, mon");
  }, 2000);
});

const promesa3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Adeu!");
  }, 3000);
});

Promise.all([promesa2, promesa3]).then((values) => {
  console.log(values);
});
