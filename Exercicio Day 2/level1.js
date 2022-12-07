let challenge = '30 Days Of JavaScript'

console.log(challenge)
console.log(`Essa string tem o total de ${challenge.length} indíces`)
console.log(challenge.toUpperCase())
console.log(challenge.toLowerCase())
console.log(challenge.substr(3,100))
console.log(challenge.substring(0,2))
console.log(challenge.includes('Script'))
console.log(challenge.split(' '))
console.log(challenge.replace('30 Days Of JavaScript', '30 Days Of Python'))
console.log(challenge.charAt(15))
console.log(challenge.charCodeAt(11))
console.log(challenge.indexOf('a'))
console.log(challenge.lastIndexOf('a'))
console.log(challenge.startsWith('3'))
console.log(challenge.endsWith('t'))
console.log(challenge.match('a'))
console.log(challenge.concat('30 Days of JavaScript'))
console.log(challenge.repeat(2 ))

console.log('----------OUTRA PARTE----------')

let sentence = 'You cannot end a sentence with because because because is a conjunction'
console.log(sentence.indexOf('because'))
console.log(sentence.lastIndexOf('because'))
console.log(sentence.search('because'))

console.log('----------OUTRA PARTE----------')

let removeSpace = ' 30 Days Of JavaScript '
console.log(removeSpace.trim(' '))