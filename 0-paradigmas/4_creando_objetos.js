

((c,d)=> {
    c('********************Objeto Literal**********************')

    // 1. Objeto Literal
    const perro = {
        nombre: 'Trosca',
        edad: 13,
        raza: 'labrador',
        genero: 'Hembra',
        esterilizado: false,
        ladrar() {
            c('guauu guauu')
        },
        comer(comida = 'croquetas') {
            c(`${this.nombre} come ${comida}`)
        },
        aparecer(imagen) {
            d.write(`<img src="${imagen}" style="width: 800px; height: 400px;"/>`)
        }
    }

    c(
        perro
    )

    perro.ladrar()
    // mi método comer tiene como valor por defecto 'croquetas' si es que no le paso una comida como parametro
    perro.comer('Hamburguesa')

    perro.aparecer('https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fdogblog007.files.wordpress.com%2F2013%2F04%2Flabrador-retriever-bouquet-head.jpg&f=1')




    c('********************Prototipo Object**********************')


    // 2. Prototipo Object
    const perro2 = new Object()
    perro2.nombre = 'Luna'
    perro2.edad = 1
    perro2.raza = 'Husky'
    perro2.genero = 'Hembra'
    perro2.esterilizado = false
    perro2.ladrar = () => c('guauu guauu')
    // hay tres formas de hacer este metodo de comer ya que haciendolo así el scope no me permite acceder a this.nombre como
    // arrow function, en cambio si me deja hacerlo cuando es una función anonima
    // perro2.comer = (comida = 'croquetas') => c(`${perro2.nombre} come ${comida}`)
    // perro2.comer = (comida = 'croquetas') => c(`${this.nombre} come ${this.comida}`)
    perro2.comer = function (comida = 'croquetas') {
        c(`${this.nombre} come ${comida}`)
    } 


    perro2.aparecer = imagen => d.write(`<img src="${imagen}" style="width: 800px; height: 400px;"/>`)

    c(perro2)

    perro2.ladrar()
    perro2.comer()
    perro2.aparecer('https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fmascotaking.com%2Fwp-content%2Fuploads%2F2014%2F09%2Fhusky-siberiano.jpg&f=1')




    // 3. Función Constructora
    c('********************Función Constructora**********************')

    function Perro(nombre, edad, raza, genero, esterilizado) {
        // atributos
        this.nombre = nombre
        this.edad = edad
        this.raza = raza
        this.genero = genero
        this.esterilizado = esterilizado

        // métodos
        this.ladrar = () => c('guauu guau')
        this.comer = (comida = 'croquetas') => c(`${this.nombre} come ${comida}`)
        this.aparecer = (imagen) => d.write(`<img src="${imagen}" style="width: 800px; height: 400px;"/>`)
    }

    const perro3 = new Perro('Budy',12,'schnauzer','Macho', false),
        perro3_2 = new Perro('Whisky',17,'Pastor aleman','Macho',true)

    c(perro3, perro3_2)

    perro3.ladrar()
    perro3.comer('Tacos')
    perro3.aparecer('https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.petdarling.com%2Farticulos%2Fwp-content%2Fuploads%2F2014%2F04%2Fschnauzer.jpg&f=1')

    perro3_2.ladrar()
    perro3_2.comer('Vegetales')
    perro3_2.aparecer('https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F4%2F46%2FPastor_alem%25C3%25A1n_galego.JPG&f=1')





    // 4. Clases apartir de ES6
    c('********************Clases apartir de ES6**********************')


})(console.log, document);