

let caixa = document.getElementById('caixa1')
let p = document.getElementById('p')
let res = document.createElement('p')
var c = 2
let times = [];





function Times() {
     
         times.push((caixa1.value))  ;

         p.innerText = ' Nome do ' + c + ' time: '
         c += 1;


        if (times.length == 3) {
  
            for (c = 0; c < 3; c++) {
                 
                
                div.appendChild(res)
                res.innerHTML += '<br>' + times[c]


            }
        }




}