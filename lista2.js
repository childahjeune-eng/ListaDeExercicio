//criar um programa que mostre se um numero e positivo ou negativo
let num1 = 99
if (num1>=0) {
    console.log (`o numero ${num1} e positivo`)
} else {
    console.log (`o numero ${num1} e negativo`)
}

//criar um programa que mostre se um ano bissexto.
let ano = 1984
if (ano % 4 === 0) {
    console.log ('bissexto');
} else {
    console.log ('não e bissexto.')
}

//criar um programa que mostre uma senha e a mensagem acesso permitido
let senha = "0508chil"
if (senha === "0508chil") {
    console.log ("acesso permitido")
} else {
    console.log ("acesso negado")
}

//criar um programa que mostre um desconto de 5% para compras maiores que R%100
let valor = 150

if (valor > 100) {
    let desconto = valor * 0.05
    let valorFinal = valor - desconto
    console.log(`Você ganhou 5% de desconto. Valor final: R$${valorFinal}`)
} else {
    console.log(`Sem desconto. Valor da compra: R$${valor}`)
}

//criar  um programa que classifique uma pessoa como criança, adolescente ou Aduto de acordo com a idade
let idade = 16

if (idade <= 12) {
    console.log("Criança")
} else if (idade <= 17) {
    console.log("Adolescente")
} else {
    console.log("Adulto")
}

//criar um programa que mostre qual tipo de triângulo de acordo com seus lados (Equilateros,Isóceles e Escalneo)
let a = 5
let b = 5
let c = 5

if (a === b && b === c) {
    console.log("Triângulo Equilátero")
} else if (a === b || a === c || b === c) {
    console.log("Triângulo Isósceles")
} else {
    console.log("Triângulo Escaleno")
}

//criar um programa que mostre conceitis A B C ou D eacordo com as notas: >9.5 A; Entre 9.4 e 8.5 B; entre 8.4 e 7.0 C <6.9 D
let nota = 8.7

if (nota >= 9.5) {
    console.log("Conceito A")
} else if (nota >= 8.5) {
    console.log("Conceito B")
} else if (nota >= 7.0) {
    console.log("Conceito C")
} else {
    console.log("Conceito D")
}

//criar um programa para verificar se um número 12 e divisivel por  2 e 3 

if (numero % 2 === 0 && numero % 3 === 0) {
    console.log("O número é divisível por 2 e por 3")
} else {
    console.log("O número NÃO é divisível por 2 e por 3")
}

//criar um programa para mostra um desconto de 12% para produtos acima de R%800
let  = 900

if (valor > 800) {
    let desconto = valor * 0.12
    let valorFinal = valor - desconto
    console.log(`valor com desconto: ${valorFinal}`)
} else {
    console.log("sem desconto")
}

//criar um programa que mostre os números de 1 a 10 usando laço de repetição
for (let i = 1; i <= 10; i++) {
    console.log(i)
}

//criar um programa para mostrar apenas os números pares entre 1 e 20
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i)
    }
}

//criar um programa para mostrar apenas os números impares entre 1 e 20
for (let i = 1; i <= 20; i++) {
    if (i % 2 !== 0) {
        console.log(i)
    }
}

//criar um programa para mostrar a tabuada do 5
for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5 * i}`)
}

//criar um programa para mostrar os números de 1 a 7 usando while
let n = 1

while (n <= 7) {
    console.log(n)
    n++
}

//criar um programa para mostrar a tabuada do 3 usando while
let i = 1

while (i <= 10) {
    console.log(`3 x ${i} = ${3 * i}`)
    i++
}

//criar um programa para mostrar o fatorial de 5
let numero = 5
let fatorial = 1

for (let i = 1; i <= numero; i++) {
    fatorial = fatorial * i
}

console.log(`fatorial de ${numero} = ${fatorial}`)

//criar um programa para saber se o número 7 é primario
let num = 7
let primo = true

for (let i = 2; i < num; i++) {
    if (num % i === 0) {
        primo = false
    }
}

if (primo) {
    console.log("é primo")
} else {
    console.log("não é primo")
}

//criar um programa para calcular a potência de 2
let base = 2
let expoente = 3
let resultado = 1

for (let i = 1; i <= expoente; i++) {
    resultado = resultado * base
}

console.log(resultado)
