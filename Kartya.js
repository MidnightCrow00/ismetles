export default class Kartya {
  //adattagok
  #obj = {};
  #szuloElem;
  //constructor
  constructor(obj, szuloElem) {
    this.#obj = obj;
    this.#szuloElem = szuloElem;
    this.kutyaKiIr();
    //gombelem a Kartya saját adattagja
    this.gombElem = $(".kivalaszt:last-child");
    console.log(this.gombElem);
    this.esemenyKezelo();
  }
  //tagfüggyvény
  kutyaKiIr() {
    this.#szuloElem.append(`
            <div class="card col-lg-4 col-md-6">
                <div class="card-body">
                    <h3 class="card-title ">${this.#obj.nev}</h3>
                    <p>${this.#obj.kor}</p>
                    <p>${this.#obj.nem}</p>
                    <button class="btn btn-success kivalaszt">Kiválaszt</button>
                </div>
            </div>
            `);
  }
  esemenyKezelo() {
    this.gombElem.on("click", ()=>{
      console.log(this);
      //létrehozunk egy saját eseményt
      const e=new CustomEvent("kiválaszt", {detail:this.#obj})
      window.dispatchEvent(e)
    });
  }
}

//function névtelenfüggvények esetén a this azt a httml dom elemet jelenti amelyik az eseményt kiváltotta vagy amelyikre éppen hivatkozunk
// nyíl függvény esetén a this arra az osztály példányra mutat amelyik az adott nyilfüggvény körbefogja