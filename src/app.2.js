/* global ReactDOM */
console.log('Aplicación en ejecución')

const header = {
  title: "Añadir cervezas",
  subtitle: "Usa el formulario para añadir tus cervezas preferidas"
}

// condicionales para si no hay subtitulo
const template = (
  <header>
    <h1>{header.title}</h1>
    {header.subtitle ? <p>{header.subtitle}</p> : ''}
    {header.subtitle && <p>{header.subtitle}</p>}
  </header>
)
var appRoot = document.getElementById('app')
ReactDOM.render(template, appRoot)
