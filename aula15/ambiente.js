let num = [5, 4, 7]
num.push(1)
num.sort()
console.log(num)
console.log(`O array tem ${num.length} posições`)
console.log(`O primeiro valor do array é ${num[0]}`)
let pos = num.indexOf(10)
if (pos == -1) {
    console.log('Valor não encontrado')
} else {
    console.log(`Valor está na posição ${pos}`)
}