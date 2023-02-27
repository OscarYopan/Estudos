import React from 'react'
import './book.css'
import { Image } from '../Image/image'
import { Title } from '../Title/title'
import { Author } from '../Author/author'

export const Book = () => {
  return (
    <div className="book">
      <Image />
      <Title />
      <Author />
    </div>
  )
}
