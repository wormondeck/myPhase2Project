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
      <br/>
      <NavLink
        to="/sales"
        className="App-link"
      >
        Sales
      </NavLink>
      <br/>
      <NavLink
        to="/CarInfo"
        className="App-link"
      >
        CarInfo
      </NavLink>
    </nav>
  )
}

export default NavBar;