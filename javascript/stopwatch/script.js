const botao = document.querySelector(".start");
const hora = document.querySelector(".hora");
const minuto = document.querySelector(".minuto");
const segundo = document.querySelector(".segundo");

let text = 0
let clique = 0
let tempo = 0

function cronometro(){
    if(segundo.textContent < 59){
        segundo.textContent = parseInt(segundo.textContent) + 1
    } else if(minuto.textContent < 59) {
        segundo.textContent = 0
        minuto.textContent = parseInt(minuto.textContent) + 1
    } else if(hora.textContent < 23) {
        minuto.textContent = 0
        hora.textContent = parseInt(hora.textContent) + 1
    } else {
        segundo.textContent = 0
        minuto.textContent = 0
        hora.textContent = 0
    }
}

botao.onclick = function () {
    clique++

    switch(clique){
        case 1:
            tempo = setInterval(cronometro, 1000)

            text = "Stop"
            botao.textContent = `${text}`

            botao.classList.remove("botao")
            botao.classList.remove("reset")
            botao.classList.add("stop")
            break

        case 2:
            clearInterval(tempo)

            text = "Reset"
            botao.textContent = `${text}`

            botao.classList.remove("botao")
            botao.classList.remove("stop")
            botao.classList.add("reset")
            break

        default:
            text = "Start"
            botao.textContent = `${text}`

            botao.classList.remove("reset")
            botao.classList.remove("stop")
            botao.classList.add("botao")

            segundo.textContent = 0
            minuto.textContent = 0
            hora.textContent = 0

            clique = 0
            break
    }
}