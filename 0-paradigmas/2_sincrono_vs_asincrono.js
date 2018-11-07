
// fs, modulo de file de node que me puede permitir leer el archivo
const fs = require('fs'),
file = './assets/archivo.txt'

/* ------------------------Código Síncrono-------------------------- */
console.time('Sincrono')
console.log('\nAbriendo Archivo...')

let content

try {
    content = fs.readFileSync(file,'utf8')
    console.log(content)
} catch (err) {
    console.log(err.message)
}
console.log('\nHaciendo otra cosa\n')
console.log('\nHaciendo otra cosa más\n')

console.timeEnd('Sincrono')




/* ------------------------Código Asíncrono-------------------------- */

console.time('Asincrono')

console.log('\nAbriendo archivo...')

content = fs.readFile(file, 'utf8', (err,content)=> (err) ? console.log(err.message) : console.log(content))

console.log('\nHaciendo otra cosa\n')

console.log('\nHaciendo otra cosa más\n')

console.timeEnd('Asincrono')



