let numero = [5,8,2,9]
console.log('Nosso vetor é o : ' + numero)

numero[4]= 10


console.log('Nosso vetor é o : ' + numero)


numero.push(7) // acrescenta o valor ao array na ultima posição

console.log('Nosso vetor é o : ' + numero)

console.log('numero de posições é ' + numero.length) // Saber comprimento o tanto de vagas

console.log('Olha o sort aqui ' + numero.sort()) // coloca todos os elementos em ordem crescente


for(let posicao = 0 ; posicao < numero.length ; posicao++) {

    console.log('A posição ' + posicao + ' tem o valor' + numero[posicao])
}

//Mostrar a posição de todos os valores do vetor através da estrutura de repetição

let carro = ['gol','jetta','corolla','veloster','camaro']

for(let pos in carro) {
    console.log('O carro  na posição ' + pos +' é ' + carro[pos])
}

let posi = carro.indexOf('veloster') // Aqui pergunta em que posição esta o veloster?
console.log('O veloster esta na posição '+ posi)
// Se le assim para cada posição em carro mostro o pos (Só funciona pra array e objetos)




