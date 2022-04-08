import { Link } from "react-router-dom"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCoffee } from '@fortawesome/free-solid-svg-icons'


export default function GlobalNav() {
  return (
    <nav className="GlobalNav">
      <ul className="GlobalNav__ul">

        <li className="GlobalNav__li">
          <Link to="/" className="GlobalNav__link">Home</Link>
        </li>

        <li className="GlobalNav__li">
          <Link to="about" className="GlobalNav__link">About</Link>
        </li>
        <FontAwesomeIcon icon={faCoffee} />
      </ul>
    </nav>
  )
}
