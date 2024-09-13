function verificar() {
    var res = document.querySelector('div#res');
    var inicio = parseInt(document.getElementById('txtinicio').value)
    var fim = parseInt(document.getElementById('txtfim').value)
    var passo = parseInt(document.getElementById('txtpasso').value)

    
    var resultado = ' '
    for (var cont = inicio; cont <= fim; cont+=passo) {
        resultado = resultado + cont + ' '
    }
    res.innerHTML = resultado.trim()
}