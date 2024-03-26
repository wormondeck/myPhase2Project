import { NavLink } from "react-router-dom";
import "./App.css"

const NavBar = () => {
    return (
        <nav>
            <NavLink
              to="/"
              className="App-link"
            >
              Home
            </NavLink>
        </nav>
    )
}

export default NavBar;