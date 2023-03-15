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
  const getBook = id => {
    const book = books.find(book => {
      book.id === id
    })
    console.log(book)
  }
  return (
    <div className="booklist">
      {books.map(book => {
        return <Book {...book} key={book.id} getBook={getBook} />
      })}
    </div>
  )
}

const Book = props => {
  const { image, title, author, getBook, id } = props
  return (
    <div className="book">
      <img src={image} alt={title} />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos
        voluptatum repudiandae. Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Iusto nihil quisquam corrupti illo similique. Velit
        molestiae sint voluptate incidunt tempore laborum eaque? Beatae iusto
        totam earum dignissimos nihil at fugiat.
      </p>
      <button onClick={getBook(id)}>Add to Cart!</button>
    </div>
  )
}

const books = [
  {
    author: 'Ron DeSantis',
    title: 'The Courage to Be Free',
    image:
      'https://images-na.ssl-images-amazon.com/images/I/81QOUISS7VL._AC_UL600_SR600,400_.jpg',
    id: 1
  },
  {
    author: 'James Clear',
    title: 'Atomic Habits',
    image:
      'https://images-na.ssl-images-amazon.com/images/I/81bGKUa1e0L._AC_UL600_SR600,400_.jpg',
    id: 2
  },
  {
    author: 'Andy Elkerton',
    title: 'How to Catch a Leprechaun',
    image:
      'https://images-na.ssl-images-amazon.com/images/I/81hSK0bkkFL._AC_UL600_SR600,400_.jpg',
    id: 3
  }
]
