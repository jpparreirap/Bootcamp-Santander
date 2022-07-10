function somaValoresNumericos(numero1: number, numero2: number):number {
    return numero1 + numero2;
}

console.log(somaValoresNumericos(1, 3));

function printaValoresNumericos(numero1: number, numero2: number): void{
    console.log(numero1 + numero2);
}

//callback
function somaValoresNumericosETratar(numero1: number, numero2: number, callback: (numero: number) => number):number {
    let resultado = numero1 + numero2;
    return callback(resultado);
}

function aoQuadrado(numero: number): number {
    return numero * numero;
}

function dividirPorEleMesmo(numero:number): number{
    return numero / numero;
}

console.log(somaValoresNumericosETratar(1,3, aoQuadrado));
console.log(somaValoresNumericosETratar(1,3, dividirPorEleMesmo));