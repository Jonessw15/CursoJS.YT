let num = [5, 4, 7]
num[3] = 10
num.push(1)
num.sort()

/*vfor(let pos = 0; pos < num.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
} */

for(let pos in num) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}