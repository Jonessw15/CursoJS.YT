function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var ANO = document.getElementById('txtAno')
    var res = document.querySelector('div#res')
    if (ANO.value.length == 0 || Number(ANO.value) > ano) {
        window.alert('[ERROR] Verifique os dados e tente novamente')
    } else {
        var sex = document.getElementsByName('radsex')
        var idade = ano - ANO.value
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        // res.innerHTML = `<strong>A idade do elemento é ${idade}</strong>`
        if (sex[0].checked) {
            gênero = 'Homem'
            if (idade > 0 && idade <=11) {
                // Criança
                img.setAttribute('src', 'FE/Menino.png')
            } else if (idade < 20) {
                // Jovem
                img.setAttribute('src', 'FE/Jovem-homem.png')
            } else if (idade <= 50) {
                // Adulto
                img.setAttribute('src', 'FE/Homem.png')
            } else if (idade > 50) {
                // Idosa
                img.setAttribute('src', 'FE/Idoso.png')
            }
        } else if (sex[1].checked) {
            gênero = 'Mulher'
            if (idade > 0 && idade <=11) {
                // Criança
                img.setAttribute('src', 'FE/Menina.png')
            } else if (idade < 20) {
                // Jovem
                img.setAttribute('src', 'FE/Jovem-mulher.png')
            } else if (idade <= 50) {
                // Adulto
                img.setAttribute('src', 'FE/Mulher.png')
            } else if (idade > 50) {
                // Idosa
                img.setAttribute('src', 'FE/Idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `<p><strong>Detectamos ${gênero} com ${idade} anos</strong></p>`
        res.appendChild(img)

    }

}