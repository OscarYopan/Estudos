import React from 'react'
import logo from '../images/logo.svg'
import { socialLinks } from '../data'
import { Pagelinks } from './Pagelinks'

export const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <img src={logo} className="nav-logo" alt="backroads" />
            <button type="button" className="nav-toggle" id="nav-toggle">
              <i className="fas fa-bars"></i>
            </button>
          </div>

          <Pagelinks parentCLass="nav-links" itemClass="nav-link" />

          <ul className="nav-icons">
            {socialLinks.map(social => {
              return (
                <li key={social.id}>
                  <a
                    href={social.href}
                    target="_blank"
                    className="nav-icon"
                    rel="noreferrer"
                  >
                    <i className={social.icon}></i>
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </nav>
    </div>
  )
}
