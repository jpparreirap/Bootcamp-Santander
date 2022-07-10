const pessoa = {
    nome: 'Mariana',
    idade: 28,
    profissao: 'desenvolvedora'
}

pessoa.idade = 25;

const andre: {nome: string, idade: number, profissao: string} = {
    nome: 'Andre',
    idade: 25,
    profissao: 'pintor'
}

const paula: {nome: string, idade: number, profissao: string} = {
    nome: 'Andre',
    idade: 25,
    profissao: 'Desenvolvedora'
}

enum Profissao {
    Professora,
    Atriz,
    Desenvolvedora,
    JogadorDeFutebol
}

interface IPessoa{
    nome: string,
    idade: number,
    profissao?: Profissao
}

interface IEstudante extends IPessoa{
    materias: string[],
}

const vanessa: IPessoa = {
    nome:'Vanessa',
    idade: 23,
    profissao: Profissao.Desenvolvedora
}

const maria: IPessoa = {
    nome:'Maria',
    idade: 23,
    profissao: Profissao.Desenvolvedora
}

const jessica: IEstudante = {
    nome: 'Jessica',
    idade: 28,
    profissao: Profissao.Desenvolvedora,
    materias: ['Matemática discreta', 'Programação']
}

const monica: IEstudante = {
    nome: 'Jessica',
    idade: 28,
    materias: ['Matemática discreta', 'Programação']
}

function listar(lista:string[]){
    for (const item of lista){
        console.log('- ', item);
    }
}

listar(monica.materias);