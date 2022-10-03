class Vehiculo {
  constructor(nombre, velocidad) {
    this.nombre = nombre;
    this.velocidad = 0;
  }

  acelerar() {
    if (this.velocidad == 0) {
      this.velocidad = 10;
      console.log("Acelerando");
    } else {
      console.log("Ya aceleramos");
    }
  }

  frenar() {
    if ((this.velocidad =! 0)) {
      this.velocidad = 0;
      console.log("Reducimos la velocidad");
    } else {
      console.log("El auto ya esta detenido");
    }
  }

  getAceleramos() {
    return this.velocidad / 1.6;
  }
}

class Camion extends Vehiculo {
  #combustible;
  constructor(nombre, velocidad, combustible) {
    super(nombre, velocidad);
    this.#combustible = combustible;
  }

  acelerar() {
    this.velocidad += 5;
    this.#combustible -= 2;
  }


  cargarCombustible()
}
