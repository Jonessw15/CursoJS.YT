function gerar() {
    let valor = document.querySelector('#txtn')
    let tab = document.querySelector('#seltab')
    if (valor.value.length == 0) {
        alert('Por favor, digite um número')
    } else {
        let n = Number(valor.value)
        tab.innerHTML = ''
        for(let c = 1; c <= 10; c++) {
            let item = document.createElement('option')
            item.text = `${n} X ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
}