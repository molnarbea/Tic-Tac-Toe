import Cella from "./Cella.js";

export default class Tabla{
    #lista = [];

    constructor(lista, szuloElem){
        this.#lista = lista;
        this.szuloElem = szuloElem;
        this.szuloElem.innerHTML = "";
        this.megjelenit();
    }

    megjelenit(){
        this.#lista.forEach(
            (elem, index)=>{
                new Cella(elem, index, this.szuloElem)
            }
        )
    }
}