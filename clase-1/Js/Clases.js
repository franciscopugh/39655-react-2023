class Pokemon {
    constructor(nombre, tipo, vidas, ataque) {
        this.nombre = nombre
        this.tipo = tipo
        this.vidas = vidas
        this.ataque = ataque
        this.nivel = 1
    }

    saludar() {
        console.log(`Hola, soy el pokemon ${this.nombre} y te estoy saludando`)
    }
}

export class Pikachu extends Pokemon {
    constructor(nombre, tipo, vidas, ataque, dañoImpactrueno) {
        super(nombre, tipo, vidas, ataque) //Llamar al constructor de mi clase padre o superclase
        this.dañoImpactrueno = dañoImpactrueno
    }

    impactrueno() {
        console.log(`${this.nombre} lanzo impactrueno con daño de ${this.dañoImpactrueno}`)
    }

}

//export default Pikachu //Exporto un solo elemento 

