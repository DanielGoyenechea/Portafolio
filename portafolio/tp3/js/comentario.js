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
    data[i].comentario.forEach(capo => {
        console.log(capo)
        let cartaRestaurante = document.createElement("a");
        cartaRestaurante.classList.add("tarjeta");
        cartaRestaurante.classList.add("pr");
        cartaRestaurante.classList.add("sombra");
        console.log(cartaRestaurante)
    cartaRestaurante.innerHTML = /*html*/ `
          
  <div class="foto pr ">
                <img class="img_fit redondeo"src="${capo.image}" alt="">
                <div class="tag pa flex sombra chico">
                    <div class="chico">${capo.star}</div>
                    <div class="iconos chico">star</div>
                </div>
            </div>
            <div class="lato_desc pd25">
                <h4>${capo.name}</h4>
                <div class="resenia">${capo.review}</div>
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