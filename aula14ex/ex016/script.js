
function contar() {

    let ini = window.document.querySelector('#txti')
    let fim = window.document.querySelector('#txtf')
    let passo = window.document.querySelector('#txtp')
    let res = document.querySelector('#res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        

        if (p <=0) {
            window.alert('Passo inválido; Considerando PASSO 1')
            p = 1
        }

        if (i < f) {
            
            for(let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449}` // Para formatação de emoji usa-se '\u' // https://unicode.org/emoji/charts/full-emoji-list.html#1f922
            } 
        } else {
          
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449}` // Para formatação de emoji usa-se '\u' // https://unicode.org/emoji/charts/full-emoji-list.html#1f922
            } 

        }
        res.innerHTML += `\u{1F3C1}`
    }

}