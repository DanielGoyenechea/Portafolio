
let resto = document.querySelector(".restaurantes");

fetch("js/restaurantes.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    for (let i = 0; i < 8; i++) {

      let idr = data[i]

      let enlaceCard = document.createElement("a")
      enlaceCard.classList.add("resto")

      document.querySelector(".resultados").innerHTML += /*html*/ `
      <a href="" class="resto sombra">
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

  </a>`;

     
      let enlaceCard_id = data[i].truck_id
      

      enlaceCard.addEventListener("click", function() {
        let enlaceCard_id = data[i].truck_id
        localStorage.setItem("idLocal", enlaceCard_id)
        console.log(enlaceCard_id)


      })
      // localStorage.setItem("idLocal", idr)
      // let restau = document.querySelector(".resto")
      // restau.addEventListener("click", function(){
      //   console.log(localStorage.getItem("idLocal"))

      // } )


    }
  });




console.log(localStorage.getItem("idLocal"))
//let nameActual = document.getElementsById("")

