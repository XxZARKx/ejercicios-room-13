let miArreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let suma = 0;
let indice = 0;
while (indice < miArreglo.length) {
  if (miArreglo[indice] % 2 === 0) {
    suma += miArreglo[indice];
  }
  indice++;
}

console.log(suma);
