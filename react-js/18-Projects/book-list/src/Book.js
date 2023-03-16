import React from 'react'

export const Book = props => {
  const { image, title, author } = props
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
      <button>Add to Cart!</button>
    </div>
  )
}
