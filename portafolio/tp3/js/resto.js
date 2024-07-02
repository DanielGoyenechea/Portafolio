let resto = document.querySelector(".todo");

fetch("js/restaurantes.json")
.then((response) => {
return response.json();
})
.then((data) => {
for (let i = 0; i < 9; i++) {
// almaceno en la variable restaurante el valor de i del FOR
let restaurante = data[i];

if(data[i].truck_id == localStorage.getItem("indiceCache")){
  
     
        let cartaRestaurante = document.createElement("div");

    cartaRestaurante.innerHTML = /*html*/ `
          
    <section class="resto_image pr">
        <img src="${data[i].avatar.src}">
        <a href="home-resto.html" class="volver iconos pa">
            arrow_back
        </a>
     
        <div class="resto_precio pa centgrid sombra">${data[i].resenia}</div>
    </section>
    <nav class="categorias_resto">
        <a class="item_cat">
            <div class="iconos icon_l">location_on</div>
             ${data[i].distancia}km
        </a>
        <a class="item_cat">
            <div class="iconos icon_l">schedule</div>
            ${data[i].horario}
        </a>
        <a class="item_cat">
            <div class="iconos icon_l">notifications</div>
            Delivery
        </a>
        
    </nav>
    <section class="resto_desc">
        <div class="flex100">
            <div class="resto_titulo">
                <h3>${data[i].name}</h3>
                <h6>${data[i].tipo}</h6>
            </div>

            <div class="icon_l resto_titulo">
                ${data[i].price}USD
            </div>
        </div>
        
        <span>
            <h5>Datos:</h5>
            <h6>${data[i].bio}
        </h6>
        </span>


    </section>

  `;
  resto.appendChild(cartaRestaurante);


}



}
});

// obtengo desde la caché el valor almacenado en indiceCache
console.log("con localstorage " + localStorage.getItem("indiceCache"));
let k = localStorage.getItem("indiceCache");