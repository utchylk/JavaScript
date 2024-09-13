function carregar() {
    var msg = window.document.getElementById('msg')
    var imagem = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        imagem.src = 'manha.jpg'
        document.body.style.background = '#ADD8E6'
    } else if ( hora>=12 && hora < 18) {
        imagem.src = 'tarde.jpg'
        document.body.style.background = '#D2691E'
    } else {
        imagem.src = 'noite.jpg'
        document.body.style.background = '#4B0082'
    }

    }
