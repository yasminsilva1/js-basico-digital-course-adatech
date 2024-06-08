const prompt = require("readline-sync");

const idade = Number(prompt.question("Qual eh sua idade? "));
// const ehMaiorDeIdade = idade >= 18;

// * Estrutura Condicional: if\else
if (idade >= 18) {
	console.log("Você é maior de idade!");
} else {
	console.log("Você é menor de idade!");
}

const mediaDoAluno = 7.9;
// Média >= 7 => Aprovado
// Média < 7 e Média >= 5 => Prova final
// Média < 5 => Reprovado

if (mediaDoAluno >= 7) {
	console.log("Aprovado!");
	console.log("Parabéns! 😁👍");
} else if (mediaDoAluno >= 5) {
	console.log("Prova final!");
} else {
	console.log("Reprovado!");
}

// Posso dirigir?
// 1. Preciso ser maior de idade;
// 2. Preciso ter CNH;
const idadeDaPessoa = 23;
const temCNH = false;

if (idadeDaPessoa >= 18 && temCNH) {
	console.log("Pode dirigir!");
} else {
	console.log("Você não pode dirigir!");
}
