/* global ReactDOM */
console.log('Aplicación en ejecución')
// solucion pasar this por variable
const user = {
  name: 'Pepe',
  cities: ['Zaragoza', 'Madrid', 'Lérida'],
  showCities: function () {
    var that = this
    this.cities.forEach(function (city) {
      console.log(`${that.name} ha vivido en ${city}\n`)
    })
  }
}

// condicionales para si no hay subtitulo
const template = <div>{user.showCities()}</div>

var appRoot = document.getElementById('app')
ReactDOM.render(template, appRoot)
