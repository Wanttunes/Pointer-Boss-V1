import { personagemA } from "./usuario.js"
import { bossImg } from "./main.js"
export let barraDeVida = document.getElementsByClassName('hp-vida')[0]
export let porcentoDeVida = document.getElementsByClassName('hp-numero')[0]
console.log("boss inicializou")


export function numerosRandom(){
        let random10 = undefined
        let random11 = undefined
        let random1 = undefined
        if(personagemA.level <= 5 ){
            random10 = Number(Math.floor(Math.random()*(500 - 100 + 1)) + 100) 
            random11 = Number(Math.floor(Math.random()*(15 - 5 + 1)) + 5) 
            random1 = Number(Math.floor(Math.random()*(100 - 0 + 1)) + 0) 
        }
        if(personagemA.level > 5 && personagemA.level <= 10){
            random10 = Number(Math.floor(Math.random()*(2000 - 500 + 1)) + 500) 
            random11 = Number(Math.floor(Math.random()*(80 - 15 + 1)) + 15) 
            random1 = Number(Math.floor(Math.random()*(100 - 0 + 1)) + 0) 
        }
        if(personagemA.level > 10 && personagemA.level <= 15){
            random10 = Number(Math.floor(Math.random()*(8000 - 1000 + 1)) + 1000) 
            random11 = Number(Math.floor(Math.random()*(150 - 30 + 1)) + 30) 
            random1 = Number(Math.floor(Math.random()*(100 - 0 + 1)) + 0) 
        }
        if(personagemA.level > 15 && personagemA.level <= 20){
            random10 = Number(Math.floor(Math.random()*(20000 - 8000 + 1)) + 8000) 
            random11 = Number(Math.floor(Math.random()*(300 - 80 + 1)) + 80) 
            random1 = Number(Math.floor(Math.random()*(100 - 0 + 1)) + 0) 
        }
        if(personagemA.level > 20 && personagemA.level <= 50){
            random10 = Number(Math.floor(Math.random()*(100000 - 15000 + 1)) + 15000) 
            random11 = Number(Math.floor(Math.random()*(700 - 150 + 1)) + 150) 
            random1 = Number(Math.floor(Math.random()*(100 - 0 + 1)) + 0) 
        }
        if(personagemA.level > 50 && personagemA.level <= 150){
            random10 = Number(Math.floor(Math.random()*(1000000 - 100000 + 1)) + 100000) 
            random11 = Number(Math.floor(Math.random()*(2000 - 500 + 1)) + 500) 
            random1 = Number(Math.floor(Math.random()*(100 - 0 + 1)) + 0) 
        }

        console.log(random11)
        console.log(random10)
        return [ random10, random11, random1 ]
}


export const bosses = []

export class boss {
    constructor(hp, recompensa, drop){
        this.hp = Number(hp)
        this.recompensa = Number(recompensa)
        this.drop = Number(drop)
        this.hpMax = Number(hp)
    }
    atualizarHP(valor) {
        this.hp += valor;
        this.hpMax += valor
        if (this.hp < 0) this.hp = 0;
    }

    atualizarRecompensa(valor) {
        this.recompensa += valor;
        if (this.recompensa < 0) this.recompensa = 0;
    }

    atualizarDrop(valor) {
        this.drop += valor;

    }

    exibirStatus() {
        console.log(`HP: ${this.hp}`);
        console.log(`Dano: ${this.dano}`);
        console.log(`Dinheiro: ${this.dinheiro}`);
    }
}

export function spawnNewBoss(){
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        const [random10, random11, random1] = numerosRandom(personagemA)
        let bossA = new boss(random10, random11, random1)
        bossImg.style.backgroundColor = `#${randomColor}`
        bosses.splice(0, 1, bossA)
        let vidaBossMax = bossA.hpMax
        let vidaBossRes = bossA.hp
        barraDeVida.style.width = `${(vidaBossMax / vidaBossRes)* 100}%`
        porcentoDeVida.innerText = `${(vidaBossMax / vidaBossRes)* 100}%`
}



export function sofrendoDano(danoSofrido, hpDoBoss, bossA){
    let vidaRestante = hpDoBoss - danoSofrido
    bossA.hp = vidaRestante
    return vidaRestante
}
