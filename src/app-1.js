/* global ReactDOM */
console.log('Aplicación en ejecución')

const user = {
  name: 'Pepe',
  age: 30,
  city: 'Zaragoza'
}
// condicional mas tradicional
function getCity (city) {
  if (city) {
    return <p>Ciudad: {city}</p>
  }
}
// uso de condicionales mas rapido
const template = (
  <div>
    <h1>{user.name ? user.name : 'Desconocido'}</h1> // si no hay nombre pon desconocido
    {user.age && user.age >= 18 && <p>Edad: {user.age}</p>} // si es menor no aparece la edad
    {getCity(user.city)} // si no hay ciudad no aparece
  </div>
)
var appRoot = document.getElementById('app')
ReactDOM.render(template, appRoot)
