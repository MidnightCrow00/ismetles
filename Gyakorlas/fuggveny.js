export function kutyaKiIr(kutya) {
  const taroloElem = $(".tartalom");
  taroloElem.append(`
        <div class="card col-lg-4 col-md-6">
            <div class="card-body">
                <h3 class="card-title ">${kutya.nev}</h3>
                <p>${kutya.kor}</p>
                <p>${kutya.nem}</p>
                <button class="btn btn-success">Kiválaszt</button>
            </div>
        </div>
        `);
}
