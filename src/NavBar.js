import { NavLink } from "react-router-dom";
import "./App.css"

const NavBar = () => {
  return (
    <nav>
      <NavLink
        to="/"
        className="App-link"
      >
        Main
      </NavLink>
      <NavLink
        to="/about"
        className="App-link"
      >
        About
      </NavLink>
      <NavLink
        to="/contact"
        className="App-link"
      >
        Contact
      </NavLink>
    </nav>
  )
}

export default NavBar;