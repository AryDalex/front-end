const botaoAlmenta = document.querySelector("#almenta")
const botaoDiminui = document.querySelector("#diminui")
const numero = document.querySelector("#numero")

let contador = 0;

botaoAlmenta.onclick = () => {
    contador++
    numero.textContent = `${contador}`

    // numero.textContent = parseInt(numero.textContent) + 1;

    console.log(contador)
}

botaoDiminui.onclick = () => {
    if(contador > 0){
        contador--
        numero.textContent = `${contador}`

        // numero.textContent = parseInt(numero.textContent) - 1;
    }
    console.log(contador)
}