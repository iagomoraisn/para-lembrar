/* var msg = document.createElement("p");
msg.textContent = "This is a message box";
panel.appendChild(msg);

var closeBtn = document.createElement("button");
closeBtn.textContent = "x";
panel.appendChild(closeBtn);

closeBtn.onClick = function () {
    panel.parentNode.removeChild(panel);
}; */

//operador ternario
//var resultado = (condição) ? valor1 : valor2

/* let enviar_email = false
let frase = enviar_email ? "Enviar" : "Não enviar"
console.log(frase) */
/* 
let valor = 10
let frase = valor < 5 ? 'sim' : 'não'
console.log(frase) */
/* 
let valor = 100
valor == 98 ? console.log("sim") : console.log('nao') */

/* let valor1 = 5
let valor2 = 10
let resposta = valor1 == 5 && valor2 == 10 ? 'ok' : 'not ok'
console.log(resposta) */

/* // ordenando arrays
let nomes = ["joao", "ana", "carlos", "xavier", "catarina", "fernando"]

nomes.sort()
nomes.reverse() // ordem inversa
console.table(nomes) */

/* // ciclo while

let valor = 0
while(valor < 10){
    console.log(valor)
    valor++
} */

/* // For
for(iniciacao; condicao; incremento){
    codigo a executar
} */

/* for(let valor= 0; valor < 10; valor++){
    console.log(valor)
} */
/* 
// forEach

let nomes = ["joao", "ana", "carlos"]
nomes.forEach((n) => console.log(n)) */

// functions
/* function escrever(){
    console.log('escrevendo')
}
escrever() */
/* 
function escrever(mensagem){
/*     console.log(mensagem)
}

escrever("Estou aqui") */

/* function adicionar(a, b){
    return a + b
}

let resultado = adicionar(100, 200)
console.log("resultado:" + resultado) */

/* let transporte = {
    tipo: "automóvel",
    ano: 2032,
    marca: "audi"
}

let transporte_final = Object.assign({}, transporte)
transporte_final.marca = "nissan"
console.table(transporte)
console.table(transporte_final) */