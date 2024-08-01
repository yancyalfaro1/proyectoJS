const gmail = document.getElementById("gmail")
const contrasena = document.getElementById("contrasena")
const boton = document.getElementById("boton")

const personas = JSON.parse(localStorage.getItem("usuarios"))||[]

boton.addEventListener("click", function () {
    
  
    for (let index = 0; index < personas.length; index++) {

        if (personas[index].gmail === gmail.value && personas[index].contrasena === contrasena.value) {
            
              window.location.href="administracion.html"

        }


            
    }
})