function productoImpares(array) {
  let producto = 1;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      producto *= array[i];
    }
  }
  return producto;
}

let miArray = [15, 17, 12, 14, 7, 2, 3, 6, 9, 11];

console.log(productoImpares(miArray));
