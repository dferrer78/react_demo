/* global ReactDOM */
console.log('Aplicación en ejecución')

const user = {
  name: 'Pepe',
  cities: ['Zaragoza', 'Madrid', 'Lérida'],
  showCities: function () {
    this.cities.forEach(function (city) {
      console.log(`${this.name} ha vivido en ${city}\n`)
    })
  }
}

// condicionales para si no hay subtitulo
const template = (
  <div>{user.showCities()}</div>
)
var appRoot = document.getElementById('app')
ReactDOM.render(template, appRoot)
