let resto = document.querySelector(".contenedor_tarjetas");

fetch("js/restaurantes.json")
.then((response) => {
return response.json();
})
.then((data) => {
for (let i = 0; i < 9; i++) {
// almaceno en la variable restaurante el valor de i del FOR
let restaurante = data[i];

if(data[i].truck_id == localStorage.getItem("indiceCache")){
    data[i].menu.forEach(capo => {
        let cartaRestaurante = document.createElement("a");
        cartaRestaurante.classList.add("tarjeta");
        cartaRestaurante.classList.add("pr");
        cartaRestaurante.classList.add("sombra");
        console.log(cartaRestaurante)
    cartaRestaurante.innerHTML = /*html*/ `
          
      <div class="foto pr">
          <img class="img_fit"src="${capo.image}" alt="">
          <div class="tag pa sombra">$${capo.price}</div>
      </div>
      <div class="lato_desc pd25">
          <h4>${capo.plato}</h4>
          <h6>${capo.description}</h6>
      </div>

  `;
  resto.appendChild(cartaRestaurante);
});

}



}
});

// obtengo desde la caché el valor almacenado en indiceCache
console.log("con localstorage " + localStorage.getItem("indiceCache"));
let k = localStorage.getItem("indiceCache");