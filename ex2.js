class Coche {

    /**
     * 
     * @param {string} modelo Representa el modelo de coche (marca, serie, etc)
     * @param {string} matricula Mátricula 
     * @param {boolean} gps Indica si lleva navegación GPS integrada
     * @param {number} deposito Indica cuan lleno está el depósito. 100 indica que está completamente lleno, 0 que esta vacío.
     */
    constructor(modelo, matricula, gps) {
        this.modelo = modelo;
        this.matricula = matricula;
        this.gps = gps;
        this.deposito = 100;
    }

    // Llena el deposito a 100 unidades de gasolina
    llenarDeposito() {
    return this.deposito = 100;
    }

    // Consume una unidad del deposito
    usar() {
        return this.deposito = this.deposito -1;
    }

}

const astra = new Coche("Opel Astra", "1984 GI", false);
const ibiza = new Coche("Seat Ibiza", "2021 AZ", false);

// PRUEBAS

//1. El console.log debería mostrar una instancia del tipo 'Coche', con el modelo, matrícula e indicando si posee o no gps.
console.log("Coche Astra:", astra)

//2. Despúes de invocar el método 'usar', el depósito del coche debería tener 99 unidades
astra.usar()
console.log("Coche Astra después de usarlo:", astra)

//3. Después de invocar el método 'llenarDeposito', el coche debería tener 100 unidades de gasolina en el deposito
astra.llenarDeposito()
console.log("Coche Astra después de llenar deposito:", astra)


//4. Implementa un NUEVO MÉTODO en la clase Coche, que devuelve un bool. Este método se va a llamar 'estaDepositoVacio'. Debe devolver 'true' si al deposito le quedan 0 unidades de gasolina
ibiza.deposito = 0
console.log("El deposito del Ibiza debería estar vacío", ibiza)



