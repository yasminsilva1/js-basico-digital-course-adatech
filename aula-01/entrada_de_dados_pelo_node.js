const prompt = require("readline-sync");

const idade = prompt.question("Qual eh sua idade?");

// * Sempre que o usuário retorna um dado através do prompt ou do input, o valor virá do tipo string.
// Converter a idade de string para number
const idadeNumber =  Number(idade);
console.log(idadeNumber, typeof idadeNumber);

// * COERÇÃO EXPLÍCITA (conversão manual)
console.log(Number("x")) // NaN - not a number

console.log(typeof String(10)); // string

console.log(Boolean(2)); // true //* (qualquer número diferente de 0 é true!)

console.log(Boolean(0)); // false
