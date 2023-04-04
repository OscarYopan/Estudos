import React from 'react'
import { Title } from './Title'
import { toursData } from '../data'
import { Tour } from './Tour'

export const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title name="featured" subTitle="tours" />

      <div className="section-center featured-center">
        {toursData.map(tour => {
          return <Tour key={tour.id} {...tour} />
        })}
      </div>
    </section>
  )
}
