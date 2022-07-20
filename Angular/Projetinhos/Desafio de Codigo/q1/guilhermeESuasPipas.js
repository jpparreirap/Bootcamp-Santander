// A função gets() é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print() para imprimir a saída (output) de dados e já pula uma linha ("\n")
let lines = gets().split("\n");

let N = parseInt(lines.shift());
//TODO: Complete os espaços em branco com uma possível solução para o desafio
let resposta = ((N - 3) * N) / 2; 
print(resposta);