'use strict'

/* global ReactDOM, React */
console.log('Aplicación en ejecución')

var template = React.createElement('p', null, '\xA1Hola Mundo!')
var appRoot = document.getElementById('app')
ReactDOM.render(template, appRoot)
