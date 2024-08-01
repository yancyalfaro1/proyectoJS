const nombre = document.getElementById("nombre")
const apellidos = document.getElementById("apellidos")
const gmail = document.getElementById("email")
const contrasena = document.getElementById("contrasena")
const boton = document.getElementById("boton")


let listaPersonas = JSON.parse(localStorage.getItem("listaPersonas"))||[]

boton.addEventListener("click", function () {

    let personas ={
       nombre:nombre.value,
       apellidos:apellidos.value,
       gmail:email.value,
       contrasena:contrasena.value
   
    }
       
    listaPersonas.push(personas)
    console.log(listaPersonas)

    
    localStorage.setItem("usuarios", JSON.stringify(listaPersonas))

    window.location.href="login.html"


})