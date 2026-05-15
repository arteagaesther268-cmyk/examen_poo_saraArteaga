class Empleado {
    #salariobase;

    constructor(nombre, cedula, salariobase) {
        this.nombre = nombre;
        this.cedula = cedula;
        this.#salariobase = salariobase;
    }

    set salario(monto) {
        if (monto <= 0) {
            console.log("Error:El salario no pude ser negativo o cero.");
        } else {
            this.#salariobase = monto;
        }
    }

    get salario() {
        return this.#salariobase;
    }

    mostrarDetalles() {
        console.log(`Empleado: ${this.nombre}, cedula: ${this.cedula}, salario neto: c$${this.calcularsalarioneto()}`);
    }
}

class Desarrollador extends Empleado {
    constructor(nombre, cedula, salariobase, lenguajeprogramacion) {
        super(nombre, cedula, salariobase);
        this.lenguajeprogramacion = lenguajeprogramacion;
    }

    calcularsalarioneto() {
        return this.salario + 1500;
    }

    mostrarDetalles() {
        console.log (
      `Desarrollador de ${this.lenguajeprogramacion}: ${this.nombre}, Cédula: ${this.cedula}, Salario neto: C$${this.calcularsalarioneto()}`);
  
    }
}
class Gerente extends Empleado {
    constructor(nombre, cedula, salariobase, departamento) {
        super(nombre, cedula, salariobase);
        this.departamento = departamento;
    }

       calcularsalarioneto() {
        return this.salario + (this.salario * 0.20);
    }

    mostrarDetalles() {
        console.log(`Gerente del departamento de ${this.departamento}: ${this.nombre}, cedula: ${this.cedula}, salario neto: c$${this.calcularsalarioneto()}`);
    }
}

const desarrollador = new Desarrollador(
    "carlos",
    "001",
    10000,
    "JavaScript"
);

const gerente =  new Gerente(
    "Ana",
    "002",
    15000,
    "IT"
);

desarrollador.salario = -5000;
gerente.salario = 18000;

desarrollador.mostrarDetalles();
gerente.mostrarDetalles();