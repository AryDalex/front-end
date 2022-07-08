feather.replace()

const html = document.querySelector("#repositorios")
// const display = document.querySelector("#escreveDisplay")

// fetch(`https://api.github.com/users/${display}/repos`)
fetch("https://api.github.com/users/arydalex/repos")

.then(data => data.json())
.then(data => {
    view(data)
})

.catch((error) => {
    console.error("Error: ", error)
})

function view(value) {
    html.innerText = JSON.stringify(value)
}