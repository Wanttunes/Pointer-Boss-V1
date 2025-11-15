import { criarPersonagem, personagemA, levelText} from "./usuario.js";
import { bosses ,spawnNewBoss, sofrendoDano, barraDeVida, porcentoDeVida} from "./boss.js";
import { dropBuff, buffEffect } from "./sistemaDrop.js";
import { buffAtualizacao } from "./equipamento.js";
export let bossImg = document.getElementsByClassName("bola")[0];
console.log("main inicializou")



export let bossA = undefined

if(bossA == undefined){
    console.log("Bem Vindo!")
    spawnNewBoss(bossA)
    bossA = bosses[0]
}

console.log(bossA)

bossImg.addEventListener('click', () => {
    sofrendoDano(personagemA.dano, bossA.hp, bossA)
    console.log(personagemA.dano)
    console.log(bossA.hp)
    console.log(bossA.hpMax)
})

function vidaBossAtualizacao(){
    let vidaBossMax = bossA.hpMax
    let vidaBossRes = bossA.hp
    barraDeVida.style.width = `${(vidaBossRes / vidaBossMax)* 100}%`
    porcentoDeVida.innerText = `${((vidaBossRes / vidaBossMax)* 100).toFixed(1)}%`
}

function cicloDeBoss(){
    if(bossA.hp <= 0){
        console.log("O boss morreu")
        dropBuff()
        spawnNewBoss()
        buffAtualizacao()
        bossA = bosses[0]
        console.log(bosses)
        personagemA.atualizarLevel(1)
        personagemA.atualizarDinheiro(bossA.recompensa)
        criarPersonagem(10, 0, 1);
        console.log(personagemA.level)
        console.log(personagemA.dinheiro)
        levelText.innerText = `Level ${personagemA.level}`
        dinheiro.innerText = `Dinheiro: R$${personagemA.dinheiro}`
        dano.innerText = `Dano: ${personagemA.dano}`    
        buff.innerText = `Buff: ${personagemA.buff}`  
        return bossA, personagemA
    }
    return bossA, personagemA
}

setInterval(cicloDeBoss, 100)
setInterval(vidaBossAtualizacao, 100)
