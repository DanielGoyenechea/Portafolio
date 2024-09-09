let publi = document.querySelector(".post");
fetch("js/perfil.json")
  .then((response) => {
    return response.json();
  })
  .then((newpost) => {
    console.log(newpost);
    newpost.publicaciones.forEach(element => {
      

     publi.innerHTML += /*html*/ `
 
            <div class="newpost sombra">
                <div class="postTop">
                    <div class="postFoto">
                        <div class="imagenRedonda">
                          <img class="img" src="${element.foto}">
                        </div>
                    </div>
                    <div class="postTitulo">
                        <div class="postNombre">${element.nombreUsuario}</div>
                        <div class="postTiempo">${element.tiempo}</div>
                    </div>
                    <div class="tresPuntos"></div>
                </div>
                <div class="mypost">
                    ${element.titulo}
                </div>
                <div class="contImagenes">
                    <div class="img1">
                      <img class="img" src="${element.imagenes[0].img1}">
                    </div>
                    <div class="contDerecha">
                        <div class="img2">
                          <img class="img" src="${element.imagenes[0].img2}">
                        </div>
                        <div class="img2">
                            <img class="img" src="${element.imagenes[0].img3}">
                        </div>
                    </div>
                </div>
                <div class="botonera">
                    <div class="boton"><div class="iconos">favorite_border</div></div>
                    <div class="boton"><div class="iconos">chat</div></div>
                    <div class="boton"><div class="iconos">turned_in_not</div></div>
                </div>
            </div>
 `;

   
});
  });

let nameActual = document.getElementsById("")
