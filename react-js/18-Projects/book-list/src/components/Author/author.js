import React from 'react'
import './author.css'

export const Author = () => {
  const authorBook = 'Lloyd Devereux Richards'
  return (
    <div className="author">
      <h4 style={{ color: '#617d98' }}>{authorBook}</h4>
    </div>
  )
}
