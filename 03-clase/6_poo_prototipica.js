;
((c) => {
    /*
    Anidación de objetos
    Un objeto es una colección de variables y funciones agrupadas de manera estructural
    A las variables definidas dentro de un objeto se les denomina atributos
    A las funciones definidas dentro de un objeto se les denomina métodos

    Entonces un objeto puede tener propiedades y estas propiedades tener en su interior
    más propiedades que incluso sean objetos.

    Esto se representa en forma de árbol y podemos acceder a sus propiedades con:
        1- Notación de punto
        2- Notación de array
        3- Notación mixta
    
    */
    c('****************Anidación de Objetos***************')

    const curso = {
        titulo: 'Curso JS avanzado: Paradigmas de programación',
        docente: {
            nombre: 'ChrisPro',
            edad: 21,
            nacionalidad: 'Mexicana',
            contacto: {
                email: 'christo_9722@hotmail.com',
                github: 'github.com/christolml',
                ubicacion: 'Col'
            }
        },
        costo: 40,
        url: 'google.com',
        online: true,
        plataforma: {
            nombre: 'EDteam',
            url: 'https://ed.team',
            oficinas: ['Lima', 'Bogotá', 'Namekusei']
        }
    }


    c(curso.docente.nombre)
    c(curso['docente'].contacto['github']) // notación mixta
    c(curso['plataforma']['nombre'])
    c(curso.plataforma['url'])
    c(curso.plataforma['oficinas'][2])

})(console.log);


((c) => {

    c('****************POO con Closures***************')

    function Carrito(articulo) {
        // recursos privados
        let _articulo = articulo,
            _carrito = {}

        function agregar(articulo, cantidad) {
            _carrito[articulo] = cantidad
        }

        function quitar(articulo) {
            delete _carrito[articulo]
        }

        // esta función la tengo como privada en este closure y no lo voy a exponer en el return
        // porque solamente la ocupo dentro de la closure
        function _iterable() {
            let message = 'Carrito: \n'
            for (let key in _carrito)
                message += `\t${_carrito[key]} ${key} \n`

            return message
        }

        function ver(articulo = 'todos') {
            return (articulo === 'todos')
                // ? _carrito
                ? _iterable()
                : (_carrito.hasOwnProperty(articulo))
                    ? `${_carrito[articulo]} ${articulo}`
                    : `El articulo ${articulo} no existe en el Carrito`
        }


        return {
            agregar: agregar,
            quitar: quitar,
            ver: ver
        }
    }

    const comics = Carrito('Comics')
    comics.agregar('Flash Point Paradox', 2)
    comics.agregar('The return of the Dark Knight', 3)
    comics.agregar('Civil war', 2)
    comics.agregar('Final crisis', 1)

    c(comics.ver())
    c(comics.ver('Civil war'))
    comics.quitar('Civil war')
    c(comics.ver('Civil war'))

})(console.log);


((c) => {

    c('****************POO con Funciones Constructoras***************')

    // función constructora
    function Carrito(articulo) {
        this._articulo = articulo
        this._carrito = {}

        this.agregar = (articulo, cantidad) => this._carrito[articulo] = cantidad

        this.quitar = articulo => delete this._carrito[articulo]

        this._iterable = () => {
            let message = 'Carrito: \n'
            for (let key in this._carrito)
                message += `\t${this._carrito[key]} ${key} \n`

            return message
        }

        this.ver = (articulo = 'todos') => {
            return (articulo === 'todos')
                // ? this._carrito
                ? this._iterable()
                : (this._carrito.hasOwnProperty(articulo))
                    ? `${this._carrito[articulo]} ${articulo}`
                    : `El articulo ${articulo} no existe en el Carrito`
        }

    }

    const comics = new Carrito('Comics')
    comics.agregar('Flash Point Paradox', 2)
    comics.agregar('The return of the Dark Knight', 3)
    comics.agregar('Civil war', 2)
    comics.agregar('Final crisis', 1)

    c(comics.ver())
    c(comics.ver('Civil war'))
    comics.quitar('Civil war')
    c(comics.ver('Civil war'))

    c('****************Patrón de Diseño: Factoria o Fábrica***************')
    /* 
    Esta forma de codificar las funciones como clases se conoce como Factory Pattern
    o Template functions

    Un problema importante que tiene este tipo de estructura, es que cuando creamos
    un nuevo objeto a partir de estas funciones, se reservará espacio en memoria
    para todas las funciones

    Con un objeto creado no supone mucha desventaja, pero con varios objetos si
    */
    const libros = new Carrito('Libros'),
        musica = new Carrito('Musica'),
        juegos = new Carrito('Juegos'),
        peliculas = new Carrito('Peliculas'),
        series = new Carrito('Series')

    /* 
    Esto supone que los métodos agregar, quitar, ver e _iterable están siendo
    replicados en memoria, lo que es ineficiente
    */
    c(
        libros, '\n',
        musica, '\n',
        juegos, '\n',
        peliculas, '\n',
        series
    )

    /* 
    Para solucionar esto podemos hacer uso del objeto Prototype que permite
    que objetos de la misma clase campartan métodos y no sean replicados en 
    memoria de manera ineficiente
    */

})(console.log);


((c) => {
    c('****************POO con Prototype***************')

    function Carrito(articulo) {
        this._articulo = articulo
        this._carrito = {}
    }

    Carrito.prototype = {
        agregar: function(articulo, cantidad) {
            this._carrito[articulo] = cantidad
        },

        quitar: function(articulo) {
            delete this._carrito[articulo]
        } ,

        _iterable: function()  {
            let message = 'Carrito: \n'
            for (let key in this._carrito)
                message += `\t${this._carrito[key]} ${key} \n`

            return message
        },

        ver: function(articulo = 'todos') {
            return (articulo === 'todos')
                // ? this._carrito
                ? this._iterable()
                : (this._carrito.hasOwnProperty(articulo))
                    ? `${this._carrito[articulo]} ${articulo}`
                    : `El articulo ${articulo} no existe en el Carrito`
        }
    }


    /*     Carrito.prototype.agregar = function() {}
        Carrito.prototype.quitar = function() {}
        Carrito.prototype.ver = function() {} */


    const comics = new Carrito('Comics')
    comics.agregar('Flash Point Paradox', 2)
    comics.agregar('The return of the Dark Knight', 3)
    comics.agregar('Civil war', 2)
    comics.agregar('Final crisis', 1)

    c(comics.ver())
    c(comics.ver('Civil war'))
    comics.quitar('Civil war')
    c(comics.ver('Civil war'))


    const libros = new Carrito('Libros'),
        musica = new Carrito('Musica'),
        juegos = new Carrito('Juegos'),
        peliculas = new Carrito('Peliculas'),
        series = new Carrito('Series')

    c(
        libros, '\n',
        musica, '\n',
        juegos, '\n',
        peliculas, '\n',
        series
    )
/*
De esta manera creando nuevos objetos, su espacio en memoria es menor y ya no hay
replicación de métodos, internamente será más eficiente el uso de la memoria por parte
de Javascript y obtendremos un mejor rendimiento en la aplicación 

*/

})(console.log);
