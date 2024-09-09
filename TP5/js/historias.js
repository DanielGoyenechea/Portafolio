let publi = document.querySelector(".story_bar");
fetch("js/perfil.json")
  .then((response) => {
    return response.json();
  })
  .then((newpost) => {
    console.log(newpost);
    newpost.stories.forEach(element => {
      

     publi.innerHTML += /*html*/ `
 
<div class="story_cont">
                <div class="sombra"></div>
                <img class="img" src="${element.story_picture}" alt="">
                <div class="story_cont_redondo">
                    <img class="img" src="${element.profile_picture}" alt="">
                     
                 </div>
                 <div class="story_cont_text">${element.name}</div>
            </div>
 `;

   
});
  });

let nameActual = document.getElementsById("")
