function removePairFromArray(array, pair) {
    let arrayPairRemoved = [...array]
    let position = array.findIndex(item => item === pair);
    arrayPairRemoved.splice(position,1)
    return arrayPairRemoved
}

const array = ["AB", "AC", "AD"];

console.log(removePairFromArray(array,"AD"))
console.log(removePairFromArray(array,"AB"))
