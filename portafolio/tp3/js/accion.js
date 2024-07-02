/*
//capturo solo UN nodo con ID
let listaProductos = document.getElementById("productos")

console.log(listaProductos.innerText)

//capturo CLASES y lasc convierte en un array
let contenedor = document.getElementById("contenedor")

console.log(contenedor[1].innerHTML)

//capturo CLASES y lasc convierte en un array
let container = document.querySelectorAll(".contenedor")
alert(container[0].innerHTML)


//setTimeout(()=>{
    //alert(contenedor[0].innerHTML)
//},1000);
*/
//--------- CREAR LISTA ------------


let nuevaLista = document.createElement("ul")

document.body.appendChild(nuevaLista)



let listaElemento1 = document.createElement("li");
listaElemento1.textContent = "Primer Item Lista";
nuevaLista.appendChild(listaElemento1);

let listaElemento2 = document.createElement("li");
listaElemento2.textContent = "Segundo Item Lista";
nuevaLista.appendChild(listaElemento2);


//-----------------------------------

let futer = document.querySelector("footer")

let resta = document.getElementById("restar")
let cont = document.getElementById("contador")
let suma = document.getElementById("suma")


let counter = 1
cont.innerText = counter

function aumentarMorfi() {
    if (counter < 3) {
        counter = counter + 1
        cont.innerText = counter
        resta.style.color = "black"
    }else{
        sumar.style.color = "red"
        sumar.style.cursor = "not-allowed"
    }
}

function resTa() {
    if (counter > 1) {
        counter = counter - 1
        cont.innerText = counter
        sumar.style.color = "black"
    } else {
        resta.style.color = "red"
        resta.style.cursor = "not-allowed"
    }

}