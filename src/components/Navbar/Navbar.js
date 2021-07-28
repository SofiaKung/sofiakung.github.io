import React from 'react'
import { MenuItems } from './Menuitems'
import './Navbar.css'

const Navbar = () => {
  return (
    <span className="header">
      <div>
        <h3 classname="header-logo">Sofia Kung</h3>
      </div>

      <div className="topnav">
        {MenuItems.map((item, index) => {
          return (
            <a key={index} className={item.cName} href={item.url}>
              {item.title}
            </a>
          )
        })}
      </div>
    </span>
  )
}

export default Navbar
