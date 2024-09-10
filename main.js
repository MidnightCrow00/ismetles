import { kutyaLista } from "./adat.js";
import Kartyak from "./Kartyak.js";

const taroloElem = $(".tartalom");
new Kartyak(kutyaLista, taroloElem);
