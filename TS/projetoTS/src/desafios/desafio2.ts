enum ProfissaoOption{
    Atriz,
    Padeiro
}

interface IPessoa2{
    nome: string,
    idade: number,
    profissaoDesafio: ProfissaoOption
}

let pessoa1 = {} as IPessoa2;
pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissaoDesafio = ProfissaoOption.Atriz

let pessoa2 = {} as IPessoa2;
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissaoDesafio = ProfissaoOption.Padeiro;

let pessoa3:IPessoa2 = {
    nome: "laura",
    idade: 32,
    profissaoDesafio: ProfissaoOption.Atriz
};

let pessoa4:IPessoa2 = {
    nome: "carlos",
    idade: 19,
    profissaoDesafio: ProfissaoOption.Padeiro
};