let resto = document.querySelector(".resultados");

fetch("js/restaurantes.json")
.then((response) => {
return response.json();
})
.then((data) => {
for (let i = 0; i < 9; i++) {
// almaceno en la variable restaurante el valor de i del FOR
let restaurante = data[i];

let cartaRestaurante = document.createElement("a");
cartaRestaurante.classList.add("resto");
cartaRestaurante.classList.add("sombra");
cartaRestaurante.href = "menu.html"
// almaceno en la variable cartaRestaurante.id el valor de i del restaurante.truck_id
cartaRestaurante.id = restaurante.truck_id;
cartaRestaurante.innerHTML = /*html*/ `
      <!--a href="" class="resto sombra"-->
        <div class="img_resto"><img src=${data[i].avatar.src} alt=""></div>
          <div class="datos_resto">
            <div class="tituResto">
              ${data[i].name}
            </div>
          <div class="dato_plato">${data[i].direccion}</div>
          <div class="dato_plato">${data[i].horario}</div>
          <div class="dato_plato iconos">${data[i].puntuacion}</div>
      </div>
      <div class="puntu_resto">${data[i].resenia}</div>

  <!--/a-->`;

cartaRestaurante.addEventListener("click", function () {
let idRestauranteSeleccionado = restaurante.truck_id;
//almaceno en CACHÉ la variable indiceCache el valor de idRestauranteSeleccionado
localStorage.setItem("indiceCache", idRestauranteSeleccionado);
console.log(idRestauranteSeleccionado);
});

resto.appendChild(cartaRestaurante);
}
});

// obtengo desde la caché el valor almacenado en indiceCache
console.log("con localstorage " + localStorage.getItem("indiceCache"));
let k = localStorage.getItem("indiceCache");