import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

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
    <div className="booklist">
      <Book
        author={firstBook.author}
        title={firstBook.title}
        image={firstBook.image}
      />
      <Book
        author={secondBook.author}
        title={secondBook.title}
        image={secondBook.image}
      />
      <Book
        author={threeBook.author}
        title={threeBook.title}
        image={threeBook.image}
      />
    </div>
  )
}

const Book = () => {
  return (
    <div className="book">
      <Image />
      <Title />
      <Author />
    </div>
  )
}

const Image = props => {
  return (
    <div className="image">
      <img
        src="https://images-na.ssl-images-amazon.com/images/I/61E29imvhEL._AC_UL600_SR600,400_.jpg"
        alt="Stone Maidens"
      />
    </div>
  )
}

const Title = () => {
  const bookTitle = 'Stone Maidens'
  return (
    <div className="title">
      <h1>{bookTitle}</h1>
    </div>
  )
}

const Author = () => {
  const authorBook = 'Lloyd Devereux Richards'
  return (
    <div className="author">
      <h4 style={{ color: '#617d98' }}>{authorBook}</h4>
    </div>
  )
}

const firstBook = {
  author: 'Ron DeSantis',
  title: 'The Courage to Be Free',
  image:
    'https://images-na.ssl-images-amazon.com/images/I/81QOUISS7VL._AC_UL600_SR600,400_.jpg'
}

const secondBook = {
  author: 'James Clear',
  title: 'Atomic Habits',
  image:
    'https://images-na.ssl-images-amazon.com/images/I/81bGKUa1e0L._AC_UL600_SR600,400_.jpg'
}

const threeBook = {
  author: 'Andy Elkerton',
  title: 'How to Catch a Leprechaun',
  image:
    'https://images-na.ssl-images-amazon.com/images/I/81hSK0bkkFL._AC_UL600_SR600,400_.jpg'
}
