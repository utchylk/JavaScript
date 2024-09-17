let animais = ['cachorro', 'gato', 'pássaro', 'hamster']

for (cont = 0; cont < animais.length; cont++) {
    console.log(`Eu amo ${animais[cont]}.`)
}

for (i in animais) {
    console.log(`Eu amo ${animais[i]}`)
}