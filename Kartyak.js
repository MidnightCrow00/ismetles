import Kartya from "./Kartya.js";

export default class Kartyak {
  #lista = [];
  #taroloElem;
  constructor(lista, taroloElem) {
    this.#lista = lista;
    this.#taroloElem = taroloElem;
    this.kutyaKiIr();
  }
  kutyaKiIr() {
    this.#lista.forEach((elem) => {
      console.log(elem);
      new Kartya(elem, this.#taroloElem);
    });
  }
}
