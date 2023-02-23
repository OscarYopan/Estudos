import React from 'react'
import ReactDOM from 'react-dom/client'

function Hello() {
  return (
    <div className="exemploName">
      <h1>Hello World!</h1>
      <ul>
        <li>First</li>
        <li>Second</li>
        <li>Thirst</li>
        <li>Forth</li>
      </ul>
      <input type="text" />
    </div>
  )
}

export default Hello

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<Hello />)
