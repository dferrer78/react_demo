'use strict'

<<<<<<< HEAD
/* global ReactDOM */
console.log('Aplicación en ejecución');
var count = 0;
var addOne = function addOne() {
  console.log('addOne');
};
=======
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
>>>>>>> 5950e88ff7dd2b4817dd48e85d78928f91f4f109

var template = React.createElement(
  'div',
  null,
<<<<<<< HEAD
  React.createElement(
    'h1',
    null,
    'Count: ',
    count
  ),
  React.createElement(
    'button',
    { onClick: addOne },
    '+1'
  ),
  React.createElement(
    'button',
    { onClick: minusOne },
    '-1'
  ),
  React.createElement(
    'button',
    { onClick: reset },
    'reset'
  )
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
=======
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
>>>>>>> 5950e88ff7dd2b4817dd48e85d78928f91f4f109
