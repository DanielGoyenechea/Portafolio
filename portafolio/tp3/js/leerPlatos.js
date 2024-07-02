let platos = document.querySelector(".contenedor_tarjetas");

fetch("js/platos_argentinos.json")
  .then((response) => {
    return response.json();
  })
  .then((plato) => {
    for (let i = 0; i < plato.length; i++) {
     platos.innerHTML += /*html*/ `
      
      <a href="plato.html" class="tarjeta pr sombra">
      <div class="foto pr">
          <img class="img_fit"src="${plato[i].image}" alt="">
          <div class="tag pa sombra">$${plato[i].price}</div>
      </div>
      <div class="lato_desc pd25">
          <h4>${plato[i].plato}</h4>
          <h6>${plato[i].description}</h6>
      </div>
  </a>
 `;

   
    }  
  });

let nameActual = document.getElementsById("")