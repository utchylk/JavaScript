function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    var idade = ano - fano

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('Verifique os dados e tente novamente.')
        res.innerHTML = 'Preencha os dados acima para ver o resultado'
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ``
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade <11) {
                //criança
                img.setAttribute('src', 'menino.jpg')
            } else if (idade <18) {
                //adolescente
                img.setAttribute('src', 'garoto.jpg')
            } else if (idade < 30) {
                //homem jovem
                img.setAttribute('src', 'homemjovem.jpeg')
            } else if (idade <60) {
                //homem
                img.setAttribute('src', 'homem.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'idoso.jpg')
            }
        } else {
            gênero = 'Mulher' 
            if (idade >= 0 && idade <11) {
                //criança
                img.src ='menina.jpg'
            } else if (idade <18) {
                //adolescente
                img.src ='garota.jpg'
            } else if (idade < 30) {
                //mulher jovem
                img.src = 'mulherjovem.jpg'
            } else if (idade <60) {
                //mulher
                img.src = 'mulher.jpg'
            } else {
                //idosa
                img.src = 'idosa.jpeg'
            }
        }
            
    } 
        img.style.maxWidth = '100%';
        img.style.height = 'auto';
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos: ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }