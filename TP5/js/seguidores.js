let publi = document.querySelector(".contSeguidores");
fetch("js/perfil.json")
  .then((response) => {
    return response.json();
  })
  .then((newpost) => {
    console.log(newpost);
    newpost.followers.forEach(element => {
      

     publi.innerHTML += /*html*/ `
 
 <div class="mensaje">
                <div class="contFoto">
                    <div class="contRedondo">
                        <img src="${element.photo}" alt="" class="img">
                    </div>
                </div>
                <div class="contTexto">
                    <div class="nombre">${element.name}</div>
                    <div class="mensajes">${element.message_follow}</div>
                </div>
            </div>
 `;

   
});
  });

let nameActual = document.getElementsById("")
