import React from 'react'
import ReactDOM from 'react-dom/client'
import { Author } from './components/Author/author'
import { Book } from './components/Book/book'
import { Booklist } from './components/BookList/booklist'
import { Image } from './components/Image/image'
import { Title } from './components/Title/title'

function App() {
  return (
    <div className="App">
      <Booklist />
      <Book />
      <Image />
      <Title />
      <Author />
    </div>
  )
}

export default App

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<App />)
