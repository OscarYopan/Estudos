import React from 'react'
import { pageLinks } from '../data'

export const Pagelinks = () => {
  return (
    <ul className="footer-links">
      {' '}
      {pageLinks.map(link => {
        const { id, href, text } = link
        return (
          <li key={id}>
            <a href={href} className="footer-link">
              {text}
            </a>
          </li>
        )
      })}
    </ul>
  )
}
