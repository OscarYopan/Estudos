import React from 'react'
import { Book } from '../Book/book'

import './booklist.css'

export const Booklist = () => {
  return (
    <div className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
    </div>
  )
}
