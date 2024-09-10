import { kutyaLista } from "./adat.js";
import Kartyak from "./Kartyak.js";

const taroloElem = $(".tartalom");
const kivElem=$(".kivalasztott")
new Kartyak(kutyaLista, taroloElem);

const kivalasztottKutyalista=[]

$(window).on("kiválaszt",()=>{
    console.log(event.detail)
    kivalasztottKutyalista.push(event.detail)
    console.log(kivalasztottKutyalista)
    new Kartyak(kivalasztottKutyalista,kivElem)
})