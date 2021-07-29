import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  faGithub,
  faMedium,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div>
          <p className="text-center">
            Copyright @2021 | Designed by Sofia Kung
          </p>
        </div>

        <ul className="social_footer_ul">
          <li>
            <a href="https://github.com/SofiaKung">
              {' '}
              <FontAwesomeIcon icon={faGithub} size="3x" />
            </a>
          </li>

          <li>
            <a href="https://www.linkedin.com/in/sofiakung/">
              <i className="linkedin">
                <FontAwesomeIcon icon={faLinkedin} size="3x" />
              </i>
            </a>
          </li>

          <li>
            <a href="https://medium.com/@sofiakung">
              <i className="medium">
                <FontAwesomeIcon icon={faMedium} size="3x" />
              </i>
            </a>
          </li>
        </ul>
      </footer>
    </>
  )
}

export default Footer
