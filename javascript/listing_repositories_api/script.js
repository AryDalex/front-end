feather.replace()

const pesquisaHtml = document.querySelector(".pesquisa")
const repositoriosHtml = document.querySelector("#repositorios")
const display = document.querySelector(".escreveDisplay")
const button = document.querySelector(".buttonBuscar")

let displayValue = []

display.onkeyup = () => {
    displayValue = display.value
}

button.onclick = () => {
    if (displayValue.length > 0) {
        view()
        alert(`Repositórios de ${displayValue}`)
    }
}

const view = async () => {
    const repositoriosWeb = await fetch(`https://api.github.com/users/${displayValue}/repos`)
    const repositorios = await repositoriosWeb.json();

    repositoriosHtml.innerHTML = ""

    repositorios.forEach(repositorio => {
        const html = 
            `<div class="repositorio">
                <h3>${repositorio.name}</h3>
                <p>${repositorio.language}</p>
            </div>`;

        
        repositoriosHtml.innerHTML += html
   })
}