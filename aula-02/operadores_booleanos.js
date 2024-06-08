// * Operadores Booleanos: Comparações
const numero1 = 10;
const numero2 = 12;

// Operador de igualdade (== valor)
console.log(numero1 == numero2); // false
console.log(numero1 == "10"); // true

// Operador de igualdade estrita (=== tipo e valor)
console.log(numero1 === numero2); // false
console.log(numero1 === "10"); // false

// Operador de diferente (!= valor)
console.log(numero1 != numero2); // true
console.log(numero1 != "10"); // false

// Operador de diferente estrito (!== tipo e valor)
console.log(numero1 !== "10"); // true

// Maior que (>)
console.log(numero1 > numero2); // false

// Menor que (<)
console.log(numero1 < numero2); // true

// Maior ou igual (>=)
console.log(numero1 >= "11"); // false

// Menor ou igual (<=)
console.log(9 <= numero2); // true

// * Conjunções Lógicas
const idadePessoa1 = 20;
const idadePessoa2 = 39;

// Conjunção Lógico AND (&&) - os dois lados da comparação devem ser verdadeiros para resultar em true!
console.log(idadePessoa1 >= 18 && idadePessoa2 >= 18); // true
console.log(idadePessoa1 < 18 && idadePessoa2 >= 18); // false

// Conjunção Lógico OR (||) - um dos lados da comparação deve ser verdadeiro para resultar em true!
console.log(idadePessoa1 < 18 || idadePessoa2 >= 18); // true

// Operador de inversão NOT (!) - se for true, passa a ser false. Se for false, passa a ser true.
console.log(!true); // false
console.log(!false); // true

console.log(!(idadePessoa1 >= 18)); // retorna true se a pessoa for menor de idade