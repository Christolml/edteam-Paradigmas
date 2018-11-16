;
((c) => {
    /*  1. Asignación implícita:
        Caso 1
            this está siendo invocado dentro de un método
            this hace referencia al objeto, que contiene el método donde se invoca */

    c('********************Asignación implícita**********************')

    let yo = {
        nombre: 'Christopher Velázquez',
        edad: 21,
        saludar: function () {
            c(`Holi mi nombre es ${this.nombre}`)
        }
    }

    yo.saludar()

    /*Caso 2
        existe una función que recibe un objeto como parámetro, dentro de ella se le asigna un método al objeto
        this en este caso hace referencia al objeto que se le añade el método */

    let preparandoSaludo = function (obj) {
        obj.saludar = function () {
            c(`Holi mi nombre es ${this.nombre}`)
        }
    }

    const chris = {
        nombre: 'Chirstopher Christolml',
        edad: 21
    }, trosca = {
        nombre: 'Trosca Labrador',
        edad: 13
    }

    preparandoSaludo(chris)
    preparandoSaludo(trosca)

    chris.saludar()
    trosca.saludar()

    /*Caso 3
    una función que retorna un objeto, que contiene un método que invoca this
    este tipo de caso se parece a las closure
    */

    let Humano = function(nombre, edad, perro) {
        // return regresa un objeto
        return {
            nombre: nombre,
            edad: edad,
            saludar: function() {
                c(`Holi mi nombre es ${this.nombre}`)
            },
            perro: {
                nombre: perro,
                saludar: function() {
                    c(`${this.nombre} guauu guauu!!!!!`)
                }
            }
        }
    }

    const chris2 = Humano('Christopher', 21, 'Trosca')
    chris2.saludar()
    chris2.perro.saludar()

/*     Conclusión: this es invocado dentro de un método, implícitamente esto hace referencia 
    alo objeto que contiene el método, sin importar si el método es añadido luego
    de haber sido creado el objeto, o si es una función que retorna un objeto. */




})(console.log);
