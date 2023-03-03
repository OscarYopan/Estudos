import React from 'react'
import './author.css'

const authorBook = 'Lloyd Devereux Richards'

export const Author = () => {
  return (
    <div className="author">
      <h4 style={{ color: '#617d98' }}>{authorBook}</h4>
    </div>
  )
}
