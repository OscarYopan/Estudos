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
      <EventExemples />
      {books.map(book => {
        return <Book {...book} key={book.id} />
      })}
    </div>
  )
}

const Book = props => {
  const { image, title, author } = props
  console.log(props)
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
      <button onClick={consoleMessage}>Add to Cart!</button>
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

function consoleMessage() {
  console.log('Button Clicked!')
}

const EventExemples = () => {
  const handleFormInput = e => {
    console.log(e.target)
    console.log(e.target.name)
    console.log(e.target.value)
  }

  const handleButtonClick = () => {
    alert('Button Clicked!')
  }

  const handleFormSubmission = () => {
    alert('Form Submited!')
  }

  return (
    <div onSubmit={handleFormSubmission}>
      <h1>Events</h1>
      <h2>Typical Form</h2>
      <input
        type="text"
        name="exemplo"
        onChange={handleFormInput}
        style={{ margin: '1rem', padding: '.5rem' }}
      />
      <button onClick={handleButtonClick}>Click!</button>
    </div>
  )
}
