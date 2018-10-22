/* global ReactDOM */
console.log('Aplicación en ejecución')
// ES6
const user = {
  name: 'Pepe',
  cities: ['Zaragoza', 'Madrid', 'Lérida'],
  showCities  () { // ES6 metodo con formato ES6 
      return this.cities.map( city => city)
  }
}

// condicionales para si no hay subtitulo
const template = <div>{user.showCities()}</div>

var appRoot = document.getElementById('app')
ReactDOM.render(template, appRoot)
