
var agora = new Date()

var hora = agora.getHours()

console.log('agora são '+hora+' horas.')
 if (hora < 6) {
    console.log('Madrugada!!')
}
  else if (hora < 13) {
    console.log('Bom dia')
} else if (hora < 19) {
    console.log('Boa tarde')
} else if ( hora < 24) {
    console.log('Boa noite') 
}  