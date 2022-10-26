var corpo = window.document.body
    function carregar() {
        var msg = window.document.querySelector('#msg')
        var foto = window.document.querySelector('#imagem')
        var agora = new Date()
        var hora = agora.getHours()
       
        msg.innerHTML = `Agora são ${hora} horas`
            if (hora >= 0 && hora < 12) {
                // Bom dia!
                foto.src = `../Bom-dia.png`
                corpo.style.background = 'blue'
            } else if (hora >= 12 && hora < 18) {
                // Boa tarde
                foto.src = '../Boa-tarde.png'
                corpo.style.background = '#E65100'
            } else {
                // Boa noite
                foto.src = '../Boa-noite.png'
                corpo.style.background = '#424242'
            }
    }