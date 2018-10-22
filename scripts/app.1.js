console.log('App running')

const p = document.createElement('p') // Creamos un elemento párrafo <p></p>
const text = document.createTextNode('Hola Mundo') // Creamos un nodo de tipo texto
p.appendChild(text) // Añadimos el texto al párrafo> <p>Hola mundo</p>
const appRoot = document.getElementById('app') // --> selecciono el div
appRoot.appendChild(p)
