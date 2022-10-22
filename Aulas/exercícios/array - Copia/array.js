
console.log('oi')
let caixa1 = document.getElementById('caixa1')
let caixa2 = document.getElementById('caixa2')
let res = document.getElementById('res')
let valores = []


 
function clicar () {

    if (caixa1.value > 100 || caixa1.value == valores.length) {

        alert('esse valor ja foi digitado ou  é invalido')
    } else {


    
    let soma = 0

     valores.push(Number(caixa1.value))

    let option = document.createElement('option')

    caixa2.appendChild(option)

    option.innerText = 'valor ' + caixa1.value + ' adcionado'
      
    caixa1.value = ''

  

     

      for(let pos = 0 ; pos < valores.length ; pos++) {


        soma = soma + valores[pos]

        
    
        
      }
     
    var s = soma
    alert(' a soma ' + s)
    } 
   
      
}

function final() {
    
    
    let p = document.createElement('p')
    res.appendChild(p)
    p.innerHTML += 'Ao todo temos ' + valores.length + ' Cadastrados' +'<br><br>' + 'O maior valor foi de ' + Math.max(...valores) + '<br><br>' + 'O menor numero foi de ' + Math.min(...valores) 

    
    
   

}



  
 






