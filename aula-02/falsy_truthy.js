// Em JavaScript, os conceitos de "falsy" e "truthy" se referem a valores que, quando avaliados em um contexto booleano (ou seja, quando usados em uma expressão que espera um valor verdadeiro ou falso), se comportam como false ou true, respectivamente. 

// * Falsy - são valores considerados como falso no JS. Existem seis:
if (0) {} // o número 0
if (undefined) {} // uma variável que não foi atribuida
if (null) {} // a ausência de qualquer valor
if ("") {} // uma string vazia
if (NaN) {} // o resultado de uma operação matemática inválida
if (false) {} // o próprio valor booleano falso

// * Truthy - é basicamente tudo o que não foi citado acima! O JS entende como verdadeiro.
if (2) {} // um número diferente de 0
if ({}) {} // um objeto
if ([]) {} // um array
if ("asdfg") {} // uma string preenchida
if (nodeDaFuncao()){} // uma função
if (true) {} // o próprio valor booleano true