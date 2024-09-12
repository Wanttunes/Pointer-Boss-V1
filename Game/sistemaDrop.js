import { personagemA } from "./usuario.js";
import { boss, bosses } from "./boss.js";
import { bossA } from "./main.js";
import { dano } from "./equipamento.js";


export function dropBuff(){
    let chance = bossA.drop
    if(bossA.hp <= 0 && chance <= 100){
        console.log("Ganhou o drop!")
        let randomN = Math.floor(Math.random()*(100 - 1) + 1)
        if(randomN <= 50){
            personagemA.atualizarBuff('Fogo')
            buffEffect()
            return
        }else{
            personagemA.atualizarBuff('Força')
            buffEffect()
            return
         }
    }
}

let intervalo = null
export function buffEffect(){
    if(personagemA.buff == "Fogo"){
        if (!intervalo) {
            intervalo = setInterval(buffFogo, 1000);
            }
    }
    if(personagemA.buff == "Força"){
        if(intervalo){
            clearInterval(intervalo); 
            intervalo = null;
        }
    }
}

function buffFogo(){
    bossA.hp += -personagemA.dano*0.10  
}
function buffForça(){
    personagemA.atualizarDano(personagemA.dano*0.2) //ARRUMAR SISTEMA DE BUFF DE FORÇA
}

