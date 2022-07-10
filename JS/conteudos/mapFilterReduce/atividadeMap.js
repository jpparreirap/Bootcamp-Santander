// Usando THIS

const maca = {
    value: 2,
}

const laranja = {
    value: 3,
}

function mapWithThis(array, thisArg) {
    return array.map(function (item){
        return item * this.value;
    }, thisArg);
}

const nums = [1, 2];

console.log('maca', mapWithThis(nums, maca));

console.log('laranja', mapWithThis(nums, laranja));

// Sem o THIS

function mapWithoutThis(array) {
    return array.map((item)=>{
        return item * 2;
    })
}

const nums2 = [2, 4, 6, 8, 10];

console.log(mapWithoutThis(nums2));