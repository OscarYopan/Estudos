import React from 'react'
import ReactDOM from 'react-dom/client'

function Hello() {
  return (
    <div>
      <h1>Hello World!</h1>
    </div>
  )
}

export default Hello

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<Hello />)
