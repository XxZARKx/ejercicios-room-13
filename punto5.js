let vehiculo = {
  marca: "Toyota",
  modelo: "Modelo 3",
  anio: 2009,
  precio: 4000,
  impuesto: function () {
    if (this.anio < 2010) {
      return this.precio * 0.1;
    } else if (this.anio >= 2010) {
      return this.precio * 0.05;
    }
  },
};

console.log(vehiculo.impuesto());
