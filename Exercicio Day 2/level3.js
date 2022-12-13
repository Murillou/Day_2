let frase = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
let padrao = /love/gi
let quantidade = frase.match(padrao).length
console.log(quantidade)

console.log('=====OUTRA QUESTÃO======')

let frase2 = 'You cannot end a sentence with because because because is a conjunction'
let padrao2 = /because/gi
let quantidade2 = frase2.match(padrao2).length
console.log(quantidade2)

console.log('=====OUTRA QUESTÃO======')

const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
let replace = /%/gi
let replace1 = /\$/gi
let replace2 = /@/gi
let replace3 = /&/gi
let replace4 = /#/gi
let replace5 = /;/gi
let replace6 = /\?/gi
let replace7 = /!/gi
console.log(sentence.replace(replace, '').replace(replace1, '').replace(replace2, '').
replace(replace3, '').replace(replace4, '').replace(replace5, '').replace(replace6, '').replace(replace7, ''))

console.log('=====OUTRA QUESTÃO======')

const frase3 = 'Calculate the total annual income of the person by extracting the numbers from the following text. \'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.\''
let valueOne = /\d+/gi
let allNumbers = frase3.match(valueOne)

let intOne = parseInt(allNumbers[0])
let intTwo = parseInt(allNumbers[1])
let intTree = parseInt(allNumbers[2])
let soma = intOne + intTwo + intTree

console.log(`Salário total: ${soma}`)
