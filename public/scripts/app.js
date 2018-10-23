'use strict';

/* global ReactDOM */

var app = {
  title: 'Añadir cervezas',
  subtitle: 'Usa el formulario para añadir tus cervezas preferidas',
  cervezas: []
};

var onFormSubmit = function onFormSubmit(event) {
  event.preventDefault();
  var cerveza = event.target.elements['cerveza'].value;
  if (cerveza) {
    app.cervezas.push(cerveza);
    event.target.elements.cerveza.value = '';
    renderApp();
    console.log(app.cervezas);
  }
};

var removeAll = function removeAll() {
  console.log(app.cervezas);
  app.cervezas = [];
  console.log(app.cervezas);
  renderApp();
};

var renderApp = function renderApp() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'header',
      null,
      React.createElement(
        'h1',
        null,
        app.title
      ),
      app.subtitle ? React.createElement(
        'p',
        null,
        app.subtitle
      ) : ''
    ),
    React.createElement(
      'form',
      { onSubmit: onFormSubmit },
      React.createElement('input', { type: 'text', name: 'cerveza' }),
      React.createElement(
        'button',
        null,
        'A\xF1adir cerveza'
      ),
      React.createElement(
        'button',
        { onClick: removeAll },
        'Borrar cervezas'
      )
    ),
    app.cervezas.length ? React.createElement(
      'h2',
      null,
      'Lista de cervezas '
    ) : '',
    app.cervezas.map(function (cerveza) {
      return React.createElement(
        'p',
        null,
        cerveza
      );
    })
  );
  var appRoot = document.getElementById('app');
  ReactDOM.render(template, appRoot);
};

renderApp();

// {app.cervezas.length !== 0 && <h2>Lista de cervezas </h2>}
