const informacion = document.getElementById("informacion")
const fecha = document.getElementById("fecha")
const seleccion = document.getElementById("seleccion")
const guardar = document.getElementById("guardar")
const tareas = document.getElementById("tareas")
const eventos = document.getElementById("eventos")

let listaTareas = JSON.parse(localStorage.getItem("listaTareas"))||[]
let listaEventos = JSON.parse(localStorage.getItem("listaEventos"))||[]

let filterV = JSON.parse(localStorage.getItem("listaTareas"))||[]

  guardar.addEventListener("click", function () {

   if (seleccion.value == "tarea") {

      listaTareas.push(informacion.value + " " + fecha.value)
      localStorage.setItem("listaTareas", JSON.stringify(listaTareas))||[]

      const etiquetaP = document.createElement("p")
      const divHijo = document.createElement("div")
      etiquetaP.innerHTML = informacion.value + " " + fecha.value
      divHijo.appendChild(etiquetaP)
      tareas.appendChild(divHijo)
  
      const botonEliminar = document.createElement("button")
      botonEliminar.innerHTML = "eliminar"
      divHijo.appendChild(botonEliminar) 
      console.log(tareas)
      botonEliminar.addEventListener("click", function () {
       divHijo.remove()
       let vFilter = tareas.filter(botonEliminar==vFilter)
      })
      const botonEditar = document.createElement("button")
      botonEditar.innerHTML = "editar"
      divHijo.appendChild(botonEditar)
      console.log(tareas)
      botonEditar.addEventListener("click", function () {
       const editar = document.createElement("input")
       divHijo.appendChild(editar)
       editar.innerHTML = etiquetaP
      
        const botonGuardar = document.createElement("button")
        botonGuardar.innerHTML = "guardar"
        divHijo.appendChild(botonGuardar)
        botonGuardar.addEventListener("click", function () {
          divHijo.appendChild(botonGuardar)
        })
        botonGuardar.addEventListener("click", function () {
         etiquetaP.innerHTML=editar.value
        })
      })

  }else

   if (seleccion.value=="evento") {

      listaEventos.push(informacion.value + " " + fecha.value)
      localStorage.setItem("listaEventos",JSON.stringify(listaEventos))||[]

      const etiquetas = document.createElement("p") 
      const divHijos = document.createElement("div")
      etiquetas.innerHTML = informacion.value + " " + fecha.value
      divHijos.appendChild(etiquetas)
      eventos.appendChild(divHijos)

      const btnEliminar = document.createElement("button")
      btnEliminar.innerHTML = "eliminar"
      divHijos.appendChild(btnEliminar)
      console.log(eventos)
      btnEliminar.addEventListener("click", function () {
        divHijos.remove()
      })

      const btnEditar = document.createElement("button")
      btnEditar.innerHTML = "editar"
      divHijos.appendChild(btnEditar)
      console.log(eventos)
      btnEditar.addEventListener("click", function () {
       const editar = document.createElement("input")
       divHijos.appendChild(editar)
       editar.innerHTML = etiquetas
    
        const btnGuardar = document.createElement("button")
         btnGuardar.innerHTML = "guardar"
         divHijos.appendChild(btnGuardar)
         btnGuardar.addEventListener("click", function () {
         etiquetas.innerHTML=editar.value
        })
      })
    }
})

function guardarN() {
  let validar = JSON.parse(localStorage.getItem("listaTareas"))||[]
  


 for (let index = 0; index < validar.length; index++) {
     const etiquetaN = document.createElement("p")
     const divNuevoHijo = document.createElement("div")
     divNuevoHijo.appendChild(etiquetaN)
     etiquetaN.innerHTML = validar[index]; 
     tareas.appendChild(divNuevoHijo)

     const botEliminar = document.createElement("button")
     botEliminar.innerHTML = "eliminar"
     divNuevoHijo.appendChild(botEliminar)
     botEliminar.addEventListener("click", function () {
       let valid = JSON.parse(localStorage.getItem("listaTareas"))||[]
       let valida = valid.filter(tareas => tareas != etiquetaN.textContent)
       localStorage.setItem("listaTareas", JSON.stringify(valida))
       divNuevoHijo.remove()
      })

     const botEditar = document.createElement("button")
     botEditar.innerHTML = "editar"
     divNuevoHijo.appendChild(botEditar)
     
     const botGuardar = document.createElement("button")
     botGuardar.innerHTML = "guardar"
     divNuevoHijo.appendChild(botGuardar)
  }
}   
