/* global ReactDOM */
console.log('Aplicación en ejecución')
// ES6
const user = {
  name: 'Pepe',
  cities: ['Zaragoza', 'Madrid', 'Lérida'],
  showCities  () { // ES6 metodo con formato ES6 
      return this.cities
  }
}

// pongo llaves porque pongo codigo javascript {city}
const template = (
  <div> 
    {user.showCities().map(city => (
      <p>{city}</p>
    ))} 
    
  </div>
)
var appRoot = document.getElementById('app')
ReactDOM.render(template, appRoot)
