
// Código Frontend
function parImparFrontend(){
    let numero = prompt('Ingresa un numero'),
    modulo = numero % 2,
    par = `El número ${numero} es Par`,
    impar = `El número ${numero} es Impar`

    /* operador ternario
     variable = (condicion) ? verdadera : falsa */
    console.log( (modulo === 0) ? par : impar )
}

// parImparFrontend()



// Código Backend

function parImparBackend(){
    process.stdout.write('Ingresa un número: ')

    process.stdin.once('data',numero => {
        let modulo = numero % 2,
        par = `El número ${numero} es Par`,
        impar = `El número ${numero} es Impar`,
        residuo = (modulo === 1) ? impar : par

        process.stdout.write(residuo + "\n")
        process.exit()
    })
}

parImparBackend()
