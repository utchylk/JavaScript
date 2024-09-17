function parimp(n) {
    if (n % 2 == 0) {
        return 'par'
    } else {
        return 'ímpar'
    }
}

let res = parimp(3)
console.log(res)

console.log('--------------------------')

function fatorial(n) {
    let fat = 1
    let resultado = "";

    for (c=n;c>0;c--) {
        fat *= c

        resultado += c
        if (c>1) {
            resultado += ' x '
        } else {
            resultado += ' = '
        }
    }
    console.log(resultado + fat)
    return fat
}

console.log(fatorial(5))