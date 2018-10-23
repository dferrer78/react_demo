/* global ReactDOM */

const app = {
  title: 'Añadir cervezas',
  subtitle: 'Usa el formulario para añadir tus cervezas preferidas',
  cervezas: []
}

const onFormSubmit = event => {
  event.preventDefault()
  const cerveza = event.target.elements['cerveza'].value
  if (cerveza) {
    app.cervezas.push(cerveza)
    event.target.elements.cerveza.value = ''
    renderApp()
    console.log(app.cervezas)
  }
}

const removeAll = () => {
  console.log(app.cervezas)
  app.cervezas = []
  console.log(app.cervezas)
  renderApp()
}

const renderApp = () => {
  const template = (
    <div>
      <header>
        <h1>{app.title}</h1>
        {app.subtitle ? <p>{app.subtitle}</p> : ''}
      </header>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="cerveza" />
        <button>Añadir cerveza</button>
        <button onClick={removeAll}>Borrar cervezas</button>
      </form>
      {app.cervezas.length ? <h2>Lista de cervezas </h2> : ''}
      {/* {app.cervezas.length !== 0 && <h2>Lista de cervezas </h2>} */}
      {app.cervezas.map(cerveza => (
        <p>{cerveza}</p>
      ))}
    </div>
  )
  const appRoot = document.getElementById('app')
  ReactDOM.render(template, appRoot)
}

renderApp()

// {app.cervezas.length !== 0 && <h2>Lista de cervezas </h2>}
