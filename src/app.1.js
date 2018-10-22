/* global ReactDOM */
console.log('Aplicación en ejecución')

const template = (
  <div>
    <h1>Lista de tareas</h1>
    <p>Pendientes:</p>
    <ol>
      <li>Planchar</li>
      <li>Comprar leche</li>
    </ol>
  </div>
)
var appRoot = document.getElementById('app')
ReactDOM.render(template, appRoot)
