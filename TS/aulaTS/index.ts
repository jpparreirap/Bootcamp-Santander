// // function soma(a:number, b:number) {
// //     return a + b;
// // }

// // console.log(soma('a', 'b'));

// // interface IAnimal{
// //     nome: string;
// //     tipo: 'terrestre' | 'aquático';
// //     executarRugido(alturaEmDecibeis:number):void;
// // }

// type IAnimal = {
//     nome: string;
//     tipo: 'terrestre' | 'aquático';
//     domestico: boolean;
// }

// interface IFelino extends IAnimal{
//     visaoNoturna: boolean;
// }

// interface ICanino extends IAnimal{
//     porte: 'pequeno' | 'medio' | 'grande';
// }

// type IDomestico = IFelino | ICanino;

// // const animal: IAnimal = {
// //     nome: 'Elefante',
// //     tipo: 'terrestre',
// //     executarRugido(alturaEmDecibeis) {
// //         console.log(`${alturaEmDecibeis} dB`)
// //     },
// // };

// // animal.executarRugido('a');

// // const felino: IFelino  = {
// //     nome: 'Leão',
// //     tipo: "terrestre",
// //     visaoNoturna: true
// // }

// const animal: IDomestico = {
//     domestico: true,
//     nome: 'cachorro',
//     porte: 'medio',
//     tipo: 'terrestre',
// }


// const input = document.getElementById('input') as HTMLInputElement;

// input.addEventListener('input', (event) => {
//     const i = event.currentTarget as HTMLInputElement;
//     console.log(i.value);
// })

// // Generic Types

// function adicionaApendiceNaLista<T>(array: T[], valor:T) {
//     return array.map(() => valor);
// }

// console.log(adicionaApendiceNaLista(['1', '2', '3'], '1'));

// interface IUsuario{
//     id: string;
//     email: string;
//     cargo?: 'funcionario' | 'gerente' | 'coordenador' | 'supervisor';
// }

// // function redireciona(usuario: IUsuario | IAdmin){
// //     if('cargo' in usuario){
// //         // redirect admin
// //     }
// //     // redirect user
// // }

// function redireciona(usuario: IUsuario){
//     if(usuario.cargo){
//         // redirect(usuario.cargo);
//     }
//     // redirect user
// }

// interface ICachorro{
//     nome: string;
//     idade: number;
//     parqueFavorito?: string;
// }

// type CachorroSomenteLeitura = {
//     +readonly [K in keyof ICachorro]-?: ICachorro[K];
// }

// class MeuCachorro implements CachorroSomenteLeitura{
//     nome;
//     idade;
//     parqueFavorito;

//     constructor(nome, idade){
//         this.nome = nome;
//         this.idade = idade;
//     }
// }

// const cao = new MeuCachorro('Pantera', 7);

// console.log(cao);
// cao.idade = 10;
// console.log(cao);

// import $ from 'jquery';

// $.fn.extend({
//     novaFuncao(){
//         console.log('Chamou nova funcao');
//     }
// });

// $('input').novaFuncao();

// Omit

interface IPessoa {
    nome: string;
    idade: number;
    nacionalidade: string;
}

interface Brasileiro extends Omit<IPessoa, 'nacionalidade'>{

}

const brasileiro: Brasileiro = {
    
}