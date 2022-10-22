


function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value == 0  ||  fano.value > ano) {

        window.alert('erro')
 } else {
       var fsex = document.getElementsByName('radsex')
       var idade = ano - (fano.value)
       var genero = ''
       var img = document.createElement('img')  //cria um elemento img
       img.setAttribute('id','foto') // add um id = foto 






       if (fsex[0].checked) {
        genero = 'Homem'
          if (idade > 0 && idade < 24) {
            //jovem

            img.setAttribute('src', 'imagens/jovem.png') // Puxa a foto

               
          } else if (idade > 24 && idade < 40) {

            //homem

            img.setAttribute('src', 'imagens/hadulto.png')

          } else {

            //idoso

            img.setAttribute('src', 'imagens/velho.png')

          }



       } else {

           genero = 'Mulher'

           if (idade > 0 && idade < 24) {
            //moça

            img.setAttribute('src', 'imagens/moca.png')

               
          } else if (idade > 24 && idade < 40) {

            //Mulher


            img.setAttribute('src', 'imagens/mulheradulta.png')

          } else {

            //idosa


            img.setAttribute('src', 'imagens/velha.png')

          }
       }
       res.style.textAlign = 'center'
       res.innerHTML = 'Detectamos ' +genero+ ' com ' + idade + ' anos '
       res.appendChild(img) // add um elemento na tela
}


}