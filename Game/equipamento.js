import { personagemA } from "./usuario.js"

console.log("equipamento inicializou")


export let dinheiro = document.getElementById("dinheiro")
export let dano = document.getElementById("dano")
export let buff = document.getElementById("buff")

dinheiro.innerText = `Dinheiro: R$${personagemA.dinheiro}`
dano.innerText = `Dano: ${personagemA.dano}`
buff.innerText = `Buff: ${personagemA.buff}`




let inventario = document.getElementsByClassName("inventario")[0]
let fechar = document.getElementById("close-inv")
let abrir = document.getElementById("open-inv")
inventario.style.display = 'none'

abrir.addEventListener("click", () => {
    menuInventario()
})
fechar.addEventListener("click", () => {
    menuInventario()
})

function menuInventario(){
    if(inventario.style.display === 'none'){
        inventario.style.display = 'flex'        
        return personagemA
    }
    if(inventario.style.display === 'flex'){
        inventario.style.display = 'none'
        return
    }
}

let buff1 = document.getElementById("buff-1")
let buff2 = document.getElementById("buff-2")
let buffNome = document.getElementsByClassName("nome")[0]
let buffDescricao = document.getElementsByClassName("descricao")[0]
buff1.style.display = "none"
buff2.style.display = 'none'

export const buffs = []

export function buffAtualizacao(){  // TERMINAR SISTEMA DE EQUIPAMENTOS

    if(buffs.includes(personagemA.buff) === false){
        buff1.style.display = "flex"
        buffs.push(personagemA.buff)
    }
    console.log(buffs)

    if(buffs[0]){
        buffNome.innerText = `${buffs[0]}`
        buffDescricao.innerText = `TESTE DE DESCRICAO`
    }
    if(buffs[1]){
        buff2.style.display = "flex"
        document.getElementsByClassName("nome")[1].innerHTML = `${buffs[1]}`
        document.getElementsByClassName("descricao")[1].innerHTML = `TESTE DE DESCRICAO 2`
    }
    
}


export function escolherBuff(){

}