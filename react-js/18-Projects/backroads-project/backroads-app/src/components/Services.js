import React from 'react'
import { Title } from './Title'
import { servicesData } from '../data'

export const Services = () => {
  return (
    <section className="section services" id="services">
      <Title name="our" subTitle="services" />

      <div className="section-center services-center">
        {servicesData.map(service => {
          const  = service
          return (

          )
        })}
      </div>
    </section>
  )
}
