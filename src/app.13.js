/* global ReactDOM */
console.log('Aplicación en ejecución')
let count = 0
const addOne = () => {
  count++
  render()
  console.log('addOne')
}

const minusOne = () => {
  count--
  render()
  console.log('minusOne')
}

const reset = () => {
  count = 0
  render()
  console.log('reset')
}
const render = () => {
  const template = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={reset}>reset</button>
    </div>
  )

  const appRoot = document.getElementById('app')

  ReactDOM.render(template, appRoot)
}
render()
