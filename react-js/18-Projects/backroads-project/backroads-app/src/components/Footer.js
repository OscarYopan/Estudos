import React from 'react'
import { socialLinks } from '../data'
import { Pagelinks } from './Pagelinks'
import { SocialLinks } from './SocialLinks'

export const Footer = () => {
  return (
    <footer className="section footer">
      <Pagelinks parentClass="footer-links" itemClass="footer-link" />

      <ul className="footer-icons">
        {socialLinks.map(social => {
          return (
            <SocialLinks
              key={social.id}
              {...social}
              socialClass="footer-icon"
            />
          )
        })}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  )
}
