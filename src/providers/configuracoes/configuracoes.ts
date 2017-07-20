import { Injectable } from '@angular/core';

let configuracoes_key_name = "configuracoes";

@Injectable()
export class ConfiguracoesProvider {

    private configuracoes = {
        mostrarSlide: false,
        nome: "",
        usuario: ""
    }

    constructor() {
        
    }

    getConfiguracoes():any {
        return localStorage.getItem(configuracoes_key_name);
    }

    setConfiguracoes(mostrarSlide?: boolean, nome?:string, usuario?:string) {
        let configuracoes = {
            mostrarSlide: false,
            nome: "",
            usuario: ""
        }

        if (mostrarSlide) {
            configuracoes.mostrarSlide = mostrarSlide
        }

        if (nome) {
            configuracoes.nome = nome
        }
          
        if (usuario) {
            configuracoes.usuario = usuario
        }

        localStorage.setItem(configuracoes_key_name, JSON.stringify(configuracoes));
    }

}
