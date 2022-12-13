console.log(`The quote \'There is no exercise better for the heart than reaching down and lifting peopl up.\' by John Holmes teachs us to help one another`)

console.log('=====OUTRA QUESTÃO======')

console.log("\"Love is not patronizing and clarity isn\'t about pity,a it is about love. Charity and love are the same -- with clarity you give love, so don't just give money but reach out your hand instead\"")

console.log('=====OUTRA QUESTÃO======')

let num = '10'
let numInt = parseInt(num)
console.log(typeof numInt)

console.log('=====OUTRA QUESTÃO======')

let num1 = '9.8'
let numInt1 = parseFloat(num1)
console.log(Math.round(numInt1))

console.log('=====OUTRA QUESTÃO======')

let randomNum = Math.random()
let rndNum100 = (51 * randomNum) + 50
console.log(Math.round(rndNum100))

console.log('=====OUTRA QUESTÃO======')

let randomNum1 = Math.random()
let rndNum255 = randomNum * 256
console.log(Math.round(rndNum255))

console.log('=====OUTRA QUESTÃO======')

let js = 'JavaScript'
let randomLetter = Math.floor(Math.random() * (js.length - 1))
console.log(randomLetter)

console.log('=====OUTRA QUESTÃO======')

let escapeStrings = '1 1 1 1 1 \n2 1 2 4 8 \n3 1 3 9 27 \n4 1 4 16 64 \n5 1 5 25 125 '
console.log(escapeStrings)

console.log('=====OUTRA QUESTÃO======')

let cortar = 'You cannot end a sentence with because because because is a conjunction'
console.log(cortar.substr(30, 24))
