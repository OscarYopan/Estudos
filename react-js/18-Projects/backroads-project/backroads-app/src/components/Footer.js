import React from 'react'
import { socialLinks } from '../data'
import { Pagelinks } from './Pagelinks'

export const Footer = () => {
  return (
    <footer className="section footer">
      <Pagelinks parentCLass="footer-links" itemClass="footer-link" />

      <ul className="footer-icons">
        {socialLinks.map(social => {
          const { id, href, icon } = social
          return (
            <li key={id}>
              <a
                href={href}
                target="_blank"
                className="footer-icon"
                rel="noreferrer"
              >
                <i className={icon}></i>
              </a>
            </li>
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
