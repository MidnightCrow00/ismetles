import { kutyaLista } from "../adat.js";
//import { kutyaKiIr } from "./fuggveny.js";
import Kartya from "../Kartya.js";
// kutyák adatai megjeleniteni külön div-ekben, egymás mellett az egyes kutyák adtai

const cim = "Minden, amit a kutyáról tudni kell";
let nev = "Buksi";
nev = "Shark";
console.log("név: ", nev);
// cim headerbe írjuk ki
// megfogjuka html elemet
const cimElem = $("header");
//console.log(cimElem)
cimElem.append(`<p>${cim}</p>`);
/*const kutya1={
    nev:"Dézi",
    kor:12,
    nem:"Nőstény"
}
kutya1.nev="Morzsa"
console.log(kutya1)*/
const taroloElem = $(".tartalom");
console.log(kutyaLista[0].nev);

/*kutyaLista.forEach((elem) => {
  new Kartya(elem, taroloElem);
});*/
