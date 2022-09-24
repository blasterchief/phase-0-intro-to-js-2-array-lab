
const cats = ['Milo', 'Otis', 'Garfield']


function destructivelyAppendCat() {
    cats.push('Ralph')
}
function destructivelyPrependCat() {
    cats.unshift('Bob')
}
function destructivelyRemoveLastCat() {
    cats.splice(-1)
}
function destructivelyRemoveFirstCat() {
    cats.splice(0,1)
}
function appendCat() {
    const copyCats = [...cats, 'Broom']
    return copyCats
}
function prependCat() {
    const copyCats = ['Arnold', ...cats]
    return copyCats
}
function removeLastCat() {
    const copyCats = [...cats.slice(0,-1)]
    return copyCats
}
function removeFirstCat() {
    const copyCats = [...cats.slice(1)]
    return copyCats
}