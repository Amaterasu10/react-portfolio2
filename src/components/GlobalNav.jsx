import { Link } from "react-router-dom"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import Tooltip from "./Tooltip"

export default function globalNav() {
  return (
    <nav className="globalNav">
      <ul className="globalNav__ul">

        <li className="globalNav__li">
          <Link to="/" className="globalNav__link">
            <Tooltip tip="Home" className="globalNav__tooltip bordered">
              <FontAwesomeIcon icon={faHome} className="FAIcon globalNav__icon" />
            </Tooltip>
          </Link>
        </li>

        <li className="globalNav__li" >
          <Link to="about" className="globalNav__link">
            <Tooltip tip="About" className="globalNav__tooltip bordered">
              <FontAwesomeIcon icon={faUser} className="FAIcon globalNav__icon" />
            </Tooltip>
          </Link>
        </li>

      </ul>
    </nav>
  )
}
