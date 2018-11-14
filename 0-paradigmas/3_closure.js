
// el objetivo del clousere es darle privacidad a mis elementos 
// esto es un closure, fuera de este contorno de contador las funciones de incrementar, decrementar y valor no existen afuera
// el valor de consultar el valor es por el return del final
let contador = (() => {

    let _contador = 0

    function incrementar() {
        return _contador++
    }

    function decrementar() {
        return _contador--
    }


    // valor es un metodo publico el cual me va a servir para consultar el valor de la variable privada.
    function valor() {
        return _contador
    }

    // en este return especifico que elementos si quiero que sean retornados y de esa forma se podran acceder en el contexto global
    // el de la izquierda es como lo voy a usar en el contexto global y el de la derecha es la funcion de este contorno de contador
    return {
        incrementar: incrementar,
        decrementar: decrementar,
        valor: valor
    }


})();

console.log(contador.valor())

contador.incrementar()
contador.incrementar()
contador.incrementar()
contador.decrementar()

console.log(contador.valor())

contador.incrementar()
contador.incrementar()
contador.decrementar()

console.log(contador.valor())




