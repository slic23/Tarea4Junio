let boton = document.querySelector('.enviar')
let contenedor = document.createElement('div')
 document.body.appendChild(contenedor)
 
 let listado = 1
boton.addEventListener('click', function (){
    contenedor.classList.add('contenedor')

let parafo = document.createElement('p')
 contenedor.appendChild(parafo)

 parafo.innerHTML = listado + 'º   '+ document.querySelector('textarea').value
 listado++ 
 
})