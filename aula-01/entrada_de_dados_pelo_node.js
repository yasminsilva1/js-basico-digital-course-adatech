const prompt = require("readline-sync");

const idade = prompt.question("Qual eh sua idade?");

// * Sempre que o usuário retorna um dado através do prompt ou do input, o valor virá do tipo string.
// Converter a idade de string para number
const idadeNumber = Number(idade);
console.log(idadeNumber, typeof idadeNumber);

// * COERÇÃO EXPLÍCITA (conversão manual)
console.log(Number("x")); // NaN - not a number

console.log(typeof String(10)); // string

console.log(Boolean(2)); // true //* (qualquer número diferente de 0 é true!)

console.log(Boolean(0)); // false

// * COERÇÃO IMPLÍCITA (conversão automática)
// * Quanto tentamos somar um number com uma string, o javascript transforma tudo em string. O que está acontecendo abaixo é chamado CONCATENAÇÃO.
console.log(1 + "1"); // 11
console.log("10" + 5); // 105
console.log("2" + "2"); // 22

// * Para qualquer outro operador matemático que não for "+", o javascript entende tudo como number.
console.log(10 - "5"); // 5
console.log("2" * "2"); // 4
console.log(40 / "5"); // 8

let n = 1 + "1"; // n = 11 (string)
n = n - 1; // n = 11 - 1 = 10 (number)
console.log(n); // 10

console.log(2 + 3 + 4 + "5"); // 95 (string)
console.log("5" + 2 + 3 + 4); // 5234 (string)
console.log("10" - "4" - "3" - 2 + "5"); // (10 - 4 - 3 - 2) = 1(number) + 5(string) = 15 (string)