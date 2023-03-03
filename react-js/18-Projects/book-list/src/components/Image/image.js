import React from 'react'
import { firstBook, secondBook, threeBook } from '../../data/data'

export const Image = props => {
  return (
    <div className="image">
      <img src="props.image" alt="props.title" />
    </div>
  )
}
