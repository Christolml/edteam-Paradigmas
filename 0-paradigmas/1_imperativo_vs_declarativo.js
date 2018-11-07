
const numbers = [1,2,3,4,5]

/* Código imperativo */

console.time('Imperativo')
function squared(numbers){
    let arr = []
    for (let i = 0; i < numbers.length; i++) {
        arr.push(numbers[i] * numbers[i])
    }
    return console.log(arr)
}

squared(numbers)
console.timeEnd('Imperativo')

/* Código declarativo */

console.time('Declarativo')

console.log(numbers.map(num => num * num))

console.timeEnd('Declarativo')



