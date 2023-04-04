import React from 'react'

export const SocialLinks = ({ href, icon, socialClass }) => {
  return (
    <li>
      <a href={href} target="_blank" className={socialClass} rel="noreferrer">
        <i className={icon}></i>
      </a>
    </li>
  )
}
