import React from 'react'
import { MenuItems } from './Menuitems'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

const Navbar = () => {
  return (
    <span className="header">
      <div>
        <h3 classname="header-logo">Sofia Kung</h3>
      </div>

      <div className="topnav">
        {MenuItems.map((item, index) => {
          return (
            <Link key={index} className={item.cName} to={item.url}>
              {item.title}
            </Link>
          )
        })}
        <HashLink smooth to="/#project-section">
          Project
        </HashLink>

        <a href="https://docs.google.com/document/d/17EGUsSH1R1xmTye5ynQhA4E9q7bzTjWq_m0PM0KIYcU/edit?usp=sharing">
          Resume
        </a>
      </div>
    </span>
  )
}

export default Navbar
