function encontrarMultiplos(num, limit) {
  let multiploArray = [];

  for (let i = num; i < limit; i += num) {
    multiploArray.push(i);
  }

  return multiploArray;
}

console.log(encontrarMultiplos(5, 50));
