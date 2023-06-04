// spreed - Permite definir um número indefinido de parâmetros para uma função, Array ou objeto
const numbers = [2,8,3,1,78,23,68,119]
const string = "Exemplos de Spreed"

console.log(Math.max(2,8,3,1,78,23,68,119)) //119
console.log(Math.max(numbers)) //NaN
console.log(Math.max(...numbers)) //119
console.log(...string) //Exemplos de Spreed



//rest - Permite definir um número indefinido de parâmetros para uma função, Array ou objeto.
function sum (...nums) {
    return nums.reduce ((total, el)=>total + el)
}
console.log(sum(2,8,3,1,78,23,68,119))
//302