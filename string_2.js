let myName = 'Murillo'

let lastIndex = myName.length  - 1
console.log(lastIndex)
console.log(myName[lastIndex])

let stringTeste = 'Vinícius'
console.log(stringTeste.toUpperCase()) // tudo maísculo
console.log(stringTeste.toLowerCase()) //tudo minúsculo
console.log(stringTeste.substr(3,4)) // do indice tal + tantos indices
console.log(stringTeste.substring(4,8)) // divde do indice tal até o indice tal

let stringTeste1 = ' Meu, nome é Murillo nome Vinícius'
console.log(stringTeste1.split(' ')) // transforma em array com o caracter especificado no MÓDULO
console.log(stringTeste1)
console.log(stringTeste1.trim(''))// remove espaço do inicio e do fim da stringa
console.log(stringTeste1.includes('nome')) // verifica se a palavra ou caracter existe na string
console.log(stringTeste1.includes('Nome'))
console.log(stringTeste1.replace('Meu', 'Nosso')) //substitui a substring por uma nova subtring definida
console.log(stringTeste1.charAt(5)) //mostra o valor do indice
console.log(stringTeste1.charCodeAt(1)) //retorna o valor do indice no codigo ASCII
console.log(stringTeste1.indexOf('Murillo')) //retorna a posição do primeiro indice da substring
console.log(stringTeste1.indexOf('Zebra')) // se não existir retorna -1
console.log(stringTeste1.lastIndexOf('Vinícius')) // return a ultima posição da substring
console.log(stringTeste1.concat('Tenho 19 anos')) // adiciona substring a string
console.log(stringTeste1.startsWith(' ')) // retorna se COMEÇA com o caracter especificado no modulo
console.log(stringTeste1.endsWith('s')) // retorna se TERMINA com o caracter especificado no modulo
console.log(stringTeste1.search('Murillo')) // retorna o valor do indice do 1° caracter especificado na string
console.log(stringTeste1.match('nome'))
console.log(stringTeste1.repeat(2))// repete a string quantas vezes você pedir

