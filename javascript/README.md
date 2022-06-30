# JavaScript

### Variables

| Variable                | Function                          |
|-------------------------|-----------------------------------|
| ``` var a = 1 ```       | Global                            |
| ``` let b = 2 ```       | Pode altera valor                |
| ``` const c = a + b ``` |   Constante, não altera seu valor |

### IF and Switch

```
if(a > b){
    console.log("A é maior que B")
} else {
    console.log("A é menor que B")
}
```

```
switch(value){
    case 1:
        console.log("Value = 1")
        break
    case 2:
        console.log("Value = 2")
        break
    default:
        console.log("Value = " + value)
        break
}
```

### Loop

```
for(let index = 1; index < 5; index++){
    console.log("Interação + " + index)
}
```

```
while(value > 5){
    console.log(value)
    value--
}
```

### Vetor

```
const vet = [1, "abc", "padolabs", 1.5699, {nome: "Ary"}]
```

### Objeto

```
const obj = {
    nome: "Arielly",
    idade: 18,
    endereco: {
        rua: "Rua rua",
        numero: "123",
        bairro: "Bairro bairro"
    },
    apelidos: ["ary", "dry", "ari"]
}
```

