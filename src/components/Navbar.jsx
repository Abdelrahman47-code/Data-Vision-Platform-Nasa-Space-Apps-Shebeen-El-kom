import { NavLink } from "react-router-dom";
import "../assets/css/navbar.css";

const Navbar = () => {
  return (
    <header>
      <div className="container">
        <div className="logo">
          <h1 className="gradientText">Data Vision</h1>
        </div>
        <div className="menu">
          <NavLink to="/" className="link">
            Home
          </NavLink>
          <NavLink to="researches" className="link">
            Researches
          </NavLink>
          <NavLink to="community" className="link">
            Community
          </NavLink>
        </div>
        <div className="user">
          <NavLink to="login" className="link">
            Login | Register
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
