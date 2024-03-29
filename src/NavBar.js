import { NavLink } from "react-router-dom";
import "./App.css"

const NavBar = () => {
  return (
    <nav>
      <NavLink
        to="/"
        className="App-link"
      >
        App
      </NavLink>
    </nav>
  )
}

export default NavBar;