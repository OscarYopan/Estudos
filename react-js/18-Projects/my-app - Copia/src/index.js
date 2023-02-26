import React from 'react'
import ReactDOM from 'react-dom/client'

// Nest Components
function App() {
  return (
    <div className="App">
      <Hello />
      <Botao />
    </div>
  )
}

const Hello = () => {
  return (
    <div className="exemploName">
      <h1>Hello World!</h1>
      <ul>
        <li>First</li>
        <li>Second</li>
      </ul>
      <input type="text" />
    </div>
  )
}

const Botao = () => {
  return (
    <div className="Botao">
      <h3>Novo Mundo!</h3>
    </div>
  )
}

export default App

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<Hello />)
