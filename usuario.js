'use strict'
import { boss, bosses } from "./boss.js"
console.log("user inicializou")

export let levelText = document.getElementsByClassName("levelText")[0]

export function criarPersonagem(dano, dinheiro, level, espada, buff){
        class user {
            constructor(dano, dinheiro, level, espada, buff){
            this.dano = Number(dano)
            this.dinheiro = Number(dinheiro)
            this.level = Number(level)
            this.espada = Number(espada)
            this.buff = String(buff)
        }

        atualizarDano(valor) {
            this.dano += valor
        }

        atualizarDinheiro(valor) {
            this.dinheiro += valor;
            if (this.dinheiro < 0) this.dinheiro = 0;
        }

        atualizarLevel(valor){
            this.level += valor;
        }
        atualizarEspada(valor){
            this.espada = valor;
        }
        atualizarBuff(buff){
            this.buff = buff
        }
    }
    let personagemA = new user(dano, dinheiro, level, espada, buff);
    return personagemA
}
export let personagemA = criarPersonagem(10, 0, 1, 1, "Nenhum")

levelText.innerText = `Level ${personagemA.level}`
