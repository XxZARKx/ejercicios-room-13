let miArreglo = [
  {
    nombre: "Pepe",
    notas: [6, 7, 9, 8, 8, 7, 8, 2, 6, 8],
    aprobado: false,
    calcularPromedio: function () {
      let promedio = 0;
      for (let i = 0; i < this.notas.length; i++) {
        promedio += this.notas[i];
      }
      return promedio;
    },
    aprobacionEstudiante: function () {
      return this.calcularPromedio() >= 70;
    },
  },
  {
    nombre: "Maria",
    notas: [9, 10, 5, 8, 9, 8, 6, 6, 8, 6],
    aprobado: false,
    calcularPromedio: function () {
      let promedio = 0;
      for (let i = 0; i < this.notas.length; i++) {
        promedio += this.notas[i];
      }
      return promedio;
    },
    aprobacionEstudiante: function () {
      return this.calcularPromedio() >= 70;
    },
  },
  {
    nombre: "Pedro",
    notas: [9, 9, 9, 8, 8, 6, 6, 8, 8, 8],
    aprobado: false,
    calcularPromedio: function () {
      let promedio = 0;
      for (let i = 0; i < this.notas.length; i++) {
        promedio += this.notas[i];
      }
      return promedio;
    },
    aprobacionEstudiante: function () {
      return this.calcularPromedio() >= 70;
    },
  },
  {
    nombre: "Diana",
    notas: [7, 7, 9, 8, 8, 7, 8, 6, 6, 8],
    aprobado: false,
    calcularPromedio: function () {
      let promedio = 0;
      for (let i = 0; i < this.notas.length; i++) {
        promedio += this.notas[i];
      }
      return promedio;
    },
    aprobacionEstudiante: function () {
      return this.calcularPromedio() >= 70;
    },
  },
];

for (let i = 0; i < miArreglo.length; i++) {
  console.log(
    `${miArreglo[i].nombre} ${
      miArreglo[i].aprobacionEstudiante() ? "aprobo" : "no aprobo"
    } teniendo un puntaje de ${miArreglo[i].calcularPromedio()}`
  );
}
