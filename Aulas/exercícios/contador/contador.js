
function contar() {



var txt1 = document.getElementById('txt1')
var txt2 = document.getElementById('txt2')
var txt3 = document.getElementById('txt3')
var res = document.getElementById('res')
var cont = document.getElementById('cont')


var n1 = Number(txt1.value)
var n2 = Number(txt2.value)
var n3 = Number(txt3.value)


if (n1 == 0 || n3 <= 0) {

    alert('erro numero invalido')
} 





if (n1 < n2 )  {
    
    res.innerText = ' contando.... '
    for(var n1 ; n1 <= n2 ; n1 = n1 + n3) {
    
        res.innerText +=  ' \u{1F449} ' + n1 
    

    }
} else {
    res.innerText = ' contando.... '
    for(var n1 ; n1 >= n2 ; n1 = n1 - n3) {

        res.innerText += ' \u{1F449} ' + n1 


    }
 }


}


















