export default class Cella{
    #adat = [];
    #index = 0;

    constructor(adat, index, szuloElem){
        this.#adat = adat;
        this.#index = index;
        this.szuloElem = szuloElem;

        this.megjlenit();
        this.esemenyKezelo();

    }

    megjlenit(){
        let kod = `
            <div class = "cella">
                <p>${this.#adat}</p>
            </div>
            `
        this.szuloElem.insertAdjacentHTML("beforeend", kod)
    }
    esemenyKezelo(){
        const divElem = document.querySelector(".cella:last-child");
        divElem.addEventListener("click", (event)=>{
            console.log("event.target",event.target);
            console.log("this",this);
            this.sajatEsemeny();
        })
    }
    sajatEsemeny(){
        const e = new CustomEvent("kattintas",{detail:this.#index});
        window.dispatchEvent(e);
    }
}