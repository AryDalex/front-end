const cor = document.querySelector(".cor__fria");

function deixarCorQuente(cor){
    cor.classList.remove("cor");
    cor.classList.add("cor__quente");
}

function deixarCorFria(cor){
    cor.classList.remove("cor__quente");
    cor.classList.add("cor");
}

setInterval(() => {
    if(cor.classList.contains('cor')){
        console.log("Cor quente",cor)
        deixarCorQuente(cor)
    } else {
        console.log("Cor fria", cor)
        deixarCorFria(cor)
    }
},1000)