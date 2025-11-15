import { personagemA, criarPersonagem } from "./usuario.js"
console.log("loja inicializou")
let loja = document.getElementsByClassName("loja")[0]
let fechar = document.getElementById("close-loja")
let abrir = document.getElementById("open-loja")
loja.style.display = 'none'

abrir.addEventListener("click", () => {
    menuLoja()
})
fechar.addEventListener("click", () => {
    menuLoja()
})

function menuLoja(){
    if(loja.style.display === 'none'){
        loja.style.display = 'flex'
        validacaoItens(personagemA)
        
        return personagemA
    }
    if(loja.style.display === 'flex'){
        loja.style.display = 'none'
        return
    }
}

function validacaoItens(personagemA){
    let espada1 = document.getElementById("espada1")
    let espada2 = document.getElementById("espada2")
    let espada3 = document.getElementById("espada3")
    let espada4 = document.getElementById("espada4")
    let espada5 = document.getElementById("espada5")
    let espada6 = document.getElementById("espada6")
    let espada7 = document.getElementById("espada7")
    let espada8 = document.getElementById("espada8")
    espada1.addEventListener("click", () => {
        comprar(personagemA, 1)
        return
    })
    espada2.addEventListener("click", () => {
        comprar(personagemA, 2)
        return
    })
    espada3.addEventListener("click", () => {
        comprar(personagemA, 3)
        return
    })
    espada4.addEventListener("click", () => {
        comprar(personagemA, 4)
        return
    })
    espada5.addEventListener("click", () => {
        comprar(personagemA, 5)
        return
    })
    espada6.addEventListener("click", () => {
        comprar(personagemA, 6)
        return
    })
    espada7.addEventListener("click", () => {
        comprar(personagemA, 7)
        return
    })
    espada8.addEventListener("click", () => {
        comprar(personagemA, 8)
        return
    })
    console.log()
    return personagemA
}

function comprar(personagemA, espadaDesejada){
    if(personagemA.dinheiro >= 20 && espadaDesejada == 1){
        console.log("Comprou a espada1")
        personagemA.atualizarDano(10)
        personagemA.dinheiro += -20
        personagemA.atualizarEspada(1)
        console.log(personagemA.dinheiro)
        console.log(personagemA.dano)
        console.log(personagemA.espada)
    }
    if(personagemA.dinheiro >= 50 && espadaDesejada == 2){
        console.log("Comprou a espada2")
        personagemA.atualizarDano(20)
        personagemA.dinheiro += -50
        personagemA.atualizarEspada(2)
        console.log(personagemA.dinheiro)
        console.log(personagemA.dano)
        console.log(personagemA.espada)
        
    }
    if(personagemA.dinheiro >= 80 && espadaDesejada == 3){
        console.log("Comprou a espada3")
        personagemA.atualizarDano(30)
        personagemA.dinheiro += -80    
        personagemA.atualizarEspada(3)
        console.log(personagemA.dinheiro)
        console.log(personagemA.dano)
        console.log(personagemA.espada)
    }
    if(personagemA.dinheiro >= 100 && espadaDesejada == 4){
        console.log("Comprou a espada4")
        personagemA.atualizarDano(40)
        personagemA.dinheiro += -100
        personagemA.atualizarEspada(4)
        console.log(personagemA.dinheiro)
        console.log(personagemA.dano)
        console.log(personagemA.espada)
    }
    if(personagemA.dinheiro >= 180 && espadaDesejada == 5){
        console.log("Comprou a espada5")
        personagemA.atualizarDano(80)
        personagemA.dinheiro += -180
        personagemA.atualizarEspada(5)
        console.log(personagemA.dinheiro)
        console.log(personagemA.dano)
        console.log(personagemA.espada)
        
    }
    if(personagemA.dinheiro >= 300 && espadaDesejada == 6){
        console.log("Comprou a espada6")
        personagemA.atualizarDano(160)
        personagemA.dinheiro += -300
        personagemA.atualizarEspada(6)
        console.log(personagemA.dinheiro)
        console.log(personagemA.dano)
        console.log(personagemA.espada)
    }
    if(personagemA.dinheiro >= 500 && espadaDesejada == 7){
        console.log("Comprou a espada7")
        personagemA.atualizarDano(320)
        personagemA.dinheiro += -500
        personagemA.atualizarEspada(7)
        console.log(personagemA.dinheiro)
        console.log(personagemA.dano)
        console.log(personagemA.espada)

    }
    if(personagemA.dinheiro >= 800 && espadaDesejada == 8){
        console.log("Comprou a espada8")
        personagemA.atualizarDano(640)
        personagemA.dinheiro += -800
        personagemA.atualizarEspada(8)
        console.log(personagemA.dinheiro)
        console.log(personagemA.dano)
        console.log(personagemA.espada)
    }
    dinheiro.innerText = `Dinheiro: R$${personagemA.dinheiro}`
    dano.innerText = `Dano: ${personagemA.dano}`    
    return personagemA
}