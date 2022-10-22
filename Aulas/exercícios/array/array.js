

let caixa1 = document.getElementById('caixa1')
let caixa2 = document.getElementById('caixa2')
let p = document.createElement('p')
let res = document.getElementById('res')
let valores = []
let soma = 0
let media = 0








 
function clicar () {

  if (caixa1.value > 100 || caixa1.value == valores[length] || caixa1.value == '')  {

        alert('esse valor ja foi digitado ou  é invalido')



    } else {


    
      

    valores.push(Number(caixa1.value))

    soma += Number(caixa1.value)

    let option = document.createElement('option')

    caixa2.appendChild(option)

    document.getElementById('resposta')
    
    resposta.innerText = ''
    
   
    option.innerText = 'valor ' + caixa1.value + ' adcionado'
      
    caixa1.value = ''
    caixa1.focus()

   
    
   
 
 
  } 

      
   
}    


function final() {
    

   if (valores.length == 0) {

    alert('Digite um numero ')
   } else {


    resposta.innerText = ''
    
    media = soma/5
   
    let p = document.createElement('p')

   
    resposta.appendChild(p)
    p.innerHTML = 'Ao todo temos ' + valores.length + ' valores Cadastrados' +'<br><br>' + 'O maior valor foi de ' + Math.max(...valores) + '<br><br>' + 'O menor numero foi de ' + Math.min(...valores) + '<br><br>' + 'A soma entre todos os valores foi de ' + soma + '<br><br>'+ 'A media dos valores digitados é ' + media 

  
    

}





 


}



