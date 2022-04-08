import { Link } from "react-router-dom"

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

      </ul>
    </nav>
  )
}
