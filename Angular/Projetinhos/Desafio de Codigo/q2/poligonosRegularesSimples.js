// A função gets() é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print() para imprimir a saída (output) de dados e já pula uma linha ("\n")
let lines = gets().split("\n");
let line = lines.shift().split(' ');

//TODO: Complete os espaços em branco com uma possível solução para o desafio

const N = line[0]
const L = line[1]
const P = Number(N) * Number(L)
print(P);