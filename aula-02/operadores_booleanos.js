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