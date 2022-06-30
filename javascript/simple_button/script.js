let valor = 0;

const contador = document.querySelector('#contador');
const botao = document.querySelector('#botao');

botao.onclick = function() {
    contador.innerHTML = valor++;
} 

botao.addEventListener("click" , incrementaValor, false );

function incrementaValor(){
    contador.innerHTML = valor++;
}


// setTimeout(function mostraAlerta() {
//     alert("Timeout!!!!")

// },5000);

/*****************************************************/

// setInterval(function (){
//     contador.innerHTML = ++valor;
// },1000)

// or

// setInterval( () =>{
//     contador.innerHTML = ++valor;
// },1000)

/*****************************************************/