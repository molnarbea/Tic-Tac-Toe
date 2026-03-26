import { ADATLISTA } from "./adat.js";
import Tabla from "./tabla.js";

const szuloElem = document.querySelector(".tarolo");


const TABLA = ["","","","","","","","","",];
let kor = 0;
new Tabla(TABLA,szuloElem)


if(kor%2 == 0){
        window.addEventListener("kattintas", function(event){
        console.log(event.detail);
        TABLA[event.detail] = "X"
        new Tabla(TABLA, szuloElem)
    })
    kor=1;
}else{
    window.addEventListener("kattintas", function(event){
        console.log(event.detail);
        TABLA[event.detail] = "O"
        new Tabla(TABLA, szuloElem)
    })
    kor=0;
}

