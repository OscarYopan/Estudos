import React from 'react'
import { Book } from '../Book/book'
import { firstBook, secondBook, threeBook } from '../../data/data'

import './booklist.css'

export const Booklist = () => {
  return (
    <div className="booklist">
      <Book
        author={firstBook.author}
        title={firstBook.title}
        image={firstBook.image}
      />
      <Book />
      <Book />
    </div>
  )
}
