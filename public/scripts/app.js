"use strict";

/* global ReactDOM */
console.log('Aplicación en ejecución');

var header = {
  title: "Añadir cervezas",
  subtitle: "Usa el formulario para añadir tus cervezas preferidas"

  // condicionales para si no hay subtitulo
};var template = React.createElement(
  "header",
  null,
  React.createElement(
    "h1",
    null,
    header.title
  ),
  header.subtitle ? React.createElement(
    "p",
    null,
    header.subtitle
  ) : '',
  header.subtitle && React.createElement(
    "p",
    null,
    header.subtitle
  )
);
var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
