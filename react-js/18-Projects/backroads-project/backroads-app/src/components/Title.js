import React from 'react'

export const Title = ({ name, subTitle }) => {
  return (
    <div className="section-title">
      <h2>
        {name} <span>{subTitle}</span>
      </h2>
    </div>
  )
}
