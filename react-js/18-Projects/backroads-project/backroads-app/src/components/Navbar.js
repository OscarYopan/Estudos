import React from 'react'
import logo from '../images/logo.svg'
import { socialLinks } from '../data'
import { Pagelinks } from './Pagelinks'
import { SocialLinks } from './SocialLinks'

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>

        <Pagelinks parentClass="nav-links" itemClass="nav-link" />

        <ul className="nav-icons">
          {socialLinks.map(social => {
            return (
              <SocialLinks key={social.id} {...social} socialClass="nav-icon" />
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
