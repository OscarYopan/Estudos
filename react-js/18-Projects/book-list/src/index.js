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
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          perspiciatis fugit aperiam qui corrupti rerum nihil fugiat delectus
          quo doloribus quis neque, et vitae labore mollitia, dignissimos rem
          harum? Iure.
        </p>
        <button>Add to Cart!</button>
      </Book>
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

const Book = props => {
  const { image, title, author, children } = props
  console.log(props)
  return (
    <div className="book">
      <img src={image} alt={title} />
      <h1>{title}</h1>
      <h4>{author}</h4>
      {children}
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
