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

((c) => {
    // 2. Asignación explícita:
        // Desde ES5 cuando deseamos explícitamente referenciar this contamos con 3 métodos
        // call, apply y bind
    c('*************Asignación de this explícita*********************')

    const nombrar = function(f1, f2, f3) {
        c(`${this.nombre} es el lenguaje Front end de la Web u tiene librerías y 
frameworks muy poderosos como: ${f1}, ${f2} y ${f3}`)
    }

    const lenguaje = {
        nombre: 'Javascript',
        version: 6
    }

    let frameworks = ['Angular', 'React', 'Vue.js']

    // call: permite definir a que va a hacer referencia this en su primer parámetro
    // y los parámetros siguientes son los que recibe la función.
    nombrar.call(lenguaje, frameworks[0], frameworks[1], frameworks[2])

    // apply: permite referenciar this en el primer parámetro, pero este nos permite
    // pasar un array como los parámetros de la función
    nombrar.apply(lenguaje, frameworks)

    // bind: devuelve una función, en dónde this hace referencia al objeto que pasamos
    // en su parametro
    const frameworksJS = nombrar.bind(lenguaje, frameworks[0], frameworks[1], frameworks[2])
    frameworksJS()


})(console.log);



((c) => {
    // 3. Asignación con new
        // Cuando invocamos this en un constructor, éste hace referencia al objeto que
        // se ha instanciado
    c('*************Asignación de this con new*********************')

    let Framework = function (nombre, url, lenguaje) {
        this.nombre = nombre
        this.url = url
        this.lenguaje = lenguaje
    }

    const react = new Framework('React', 'https://facebook.github.io/react/', 'Javascript'),
        vue = Object.create(Framework)
        vue.nombre = 'Vue.js'
        c(react, vue)
})(console.log);



((c) => {
    //4. Asignación Global
        // Uno de los grandes errores con this es que cuando no se tiene una
        // referencia al objeto que representa this este hace referencia al 
        // objeto global:
            // window en los navegadores
            // global en Node.js
    
    c('*************Asignación de this con Global*********************')
    const dimeUnFramework = function () {
        c(this.nombre)
    }

    dimeUnFramework()
    // variable global, porque antes de nombre no le estoy poniendo let, var, const y al no ponerle eso
    // antes a nombre me lo cuelga como global
    // nombre = 'Angular'
    window.nombre = 'Angular'
    dimeUnFramework()



})(console.log);


((c) => {
    // 5. Arrow functions
    c('*************Arrow functions y el problema de this*********************')



})(console.log);
