let valores = []
let num = document.querySelector('input#txtnum')
let lista = document.querySelector('select#adicionados')
let final = document.querySelector('textointerno')
let res = document.getElementById('res')

function isNum(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNum(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item =document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
        }
}

function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores [0]
        let soma = 0
        let media = 0
        for (pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
    media = soma / tot
    res.innerHTML = ''
    res.innerHTML += `<p>Ao todo temos ${tot} números</p>`
    res.innerHTML += `<p>O maior número encontrado foi ${maior}</p>`
    res.innerHTML += `<p>O menor número encontrado foi ${menor}</p>`
    res.innerHTML += `<p>A média dos valores digitados é ${media}</p>`
    res.innerHTML += `<p>A soma de todos os valotes digitados é ${soma}</p>`



    }
}

