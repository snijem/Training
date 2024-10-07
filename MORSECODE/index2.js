let alphabet = 'abcdefghijklmnopqrstuvwxyz '.split('')
let morsecode =[
    '.-', '-...', '-.-.', '-..', '.', '..-.', '--.', '....',
    '..', '.---', '-.-', '.-..', '--', '-.', '---', '.--.',
    '--.-', '.-.', '...', '-', '..-', '...-', '.--', '-..-',
    '-.--', '--..','/'
  ];

function alphabetToMorse(input) {
    let str = ''
    input.toLowerCase().split('').forEach( letter => { 
        str += morsecode[alphabet.indexOf(letter)] + ','
    })
    str = str.split('')
    str.pop()
    console.log(str.join(''))
}
alphabetToMorse('hi stanley')
function morseToAlphabet(input) {
    let str = ''
    input.split(',').forEach(morse => {
        str += alphabet[morsecode.indexOf(morse)]
    })
    console.log(str)
}
morseToAlphabet('....,..,/,...,-,.-,-.,.-..,.,-.--')