import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { Booklist } from './components/BookList/booklist'

function App() {
  return (
    <div className="App">
      <Booklist />
    </div>
  )
}

export default App

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<App />)
