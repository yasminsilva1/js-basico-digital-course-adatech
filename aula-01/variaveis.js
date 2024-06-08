// Utilize sempre o Camel Case no JavaScript!

// JavaScript possui tipagem dinâmica: infere os tipos de dados, ou seja, ele deduz o tipo de uma variável com base no valor que lhe é atribuído, sem a necessidade de declarar explicitamente o tipo dessa variável.
// JavaScript possui tipagem fraca: permite operações entre diferentes tipos de dados sem lançar erros de tipo.

// * TIPOS BÁSICOS DE DADOS: string, number, boolean e undefined;
var nomeDoProfessor = "Walisson Silva"; // string (texto)
var idade = 27; // number
var altura = 1.77; // number
var estudando = true; // boolean (booleano: verdadeiro ou falso)

console.log(nomeDoProfessor, typeof nomeDoProfessor); // Walisson Silva
console.log(idade, typeof idade); // 27
console.log(altura, typeof altura); // 1.77
console.log(estudando, typeof estudando); // true

var semConteudo; // declarando uma variável
console.log(semConteudo); // undefined

// * DECLARANDO MÚLTIPLAS VARIÁVEIS EM UMA MESMA LINHA:
var curso = "Front-End em React",
	topico = "JavaScript Básico I";
console.log(curso, topico);

//! Não utilize o var nos seus códigos JS!

// * LET: permite que a variável seja alterada no decorrer do código.
let notaDoAluno = 10;
// * COSNT: não permite que a variável seja alterada no decorrer do código.
const mediaDoAluno = 8;

notaDoAluno = 9;
//! mediaDoAluno = 5; Não é permitido!

console.log(notaDoAluno);
console.log(mediaDoAluno);
