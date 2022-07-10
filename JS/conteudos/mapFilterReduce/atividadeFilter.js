function filtraPares(array) {
    return array.filter((item) => item % 2 !== 0)
}

// function callback(item) {
//     return item % 2 !== 0;
// }

const meuArray = [1, 23, 55, 67, 30, 2, 4];

console.log(filtraPares(meuArray));