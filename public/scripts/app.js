'use strict'

/* global ReactDOM, React */
console.log('Aplicación en ejecución')
// ES6
var user = {
  name: 'Pepe',
  cities: ['Zaragoza', 'Madrid', 'Lérida'],
  showCities: function showCities () {
    // ES6 metodo con formato ES6
    return this.cities
  }
}

// pongo llaves porque pongo codigo javascript {city}
var template = React.createElement(
  'div',
  null,
  user.showCities().map(function (city) {
    return React.createElement(
      'p',
      null,
      city
    )
  })
)
var appRoot = document.getElementById('app')
ReactDOM.render(template, appRoot)
