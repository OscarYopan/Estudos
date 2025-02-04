import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { books } from './books'
import { Book } from './Book'

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

const Booklist = () => {
  return (
    <div>
      <h1 className="pageName">Amazon Best Sellers</h1>
      <div className="booklist">
        {books.map(book => {
          return <Book {...book} key={book.id} />
        })}
      </div>
    </div>
  )
}
