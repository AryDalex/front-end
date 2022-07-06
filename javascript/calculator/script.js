// const displayElement = document.querySelector("#display");
const displayElement = document.getElementById("display");
const buttonsElements = document.querySelectorAll(".botao"); // vetor

let display = "0"

buttonsElements.forEach((buttonElement) => {
    buttonElement.onclick = onButtonElementClickEvent
})

function onButtonElementClickEvent(event) {
    const buttonElement = event.target
    // console.log("Botão " + buttonElement.innerText + " precionado")

    // display += buttonsElement.innerText
    // updateDisplay()

    switch(buttonElement.innerText){
        case "C":
            clearDisplay()
            break;

        case "=":
            calcularResultado()
            break;

        default:
            adicionaCaractere(buttonElement.innerText)
            break;
    }

    updateDisplay()
}

function clearDisplay() {
    display = "0" // valor inicial
} 

function calcularResultado() {
    try {
        display = eval(display) // calcula
    } catch(erro) {
        display = "ERR!!"
    }
} 

function adicionaCaractere(caractere) {
    if(display == "0" && caractere !== ".")
        display = "" // limpa

    display += caractere // coloca valor
} 

function updateDisplay() {
    displayElement.innerText = display
}