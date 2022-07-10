// Exercicio 1

function somaNumeros(array) {
    return array.reduce((prev, current) => {
        console.log({prev});
        console.log({current});
        return prev + current;
    })
}

const meuArray = [1, 2];

console.log(somaNumeros(meuArray));

console.log('\n\n\n\n');

// Exercicio 2

const lista = [
    {
        name: 'sabao em po',
        preco: 30,
    },
    {
        name: 'cereal',
        preco: 12,
    },
    {
        name: 'toalha',
        preco: 30,
    },
];

const saldoDisponivel = 100;

function calculaSaldo(saldoDisponivel, lista) {
    return lista.reduce((prev, current, index) => {
        console.log({index});
        console.log({prev});
        console.log({current});
        return prev - current.preco;
    }, saldoDisponivel);
}

console.log(calculaSaldo(saldoDisponivel, lista));