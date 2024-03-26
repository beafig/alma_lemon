import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/layout/Nav.scss";
import Logo from "../images/logo.jpg";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    console.log(menuOpen);
  };

  return (
    <nav className="navBar">
      {/* <a className="navBar__link" href="">
        <i className="fa-solid fa-house"></i>
      </a> */}
      <img className="navBar__logo" src={Logo} alt="Logo Alma Lemon" />
      <div className="navBar__menuToggle" onClick={toggleMenu}>
        <i className="fa-solid fa-bars navBar__menuToggle--icon"></i>
      </div>
      <div className={`navBar__links ${menuOpen ? "open" : ""}`}>
        <Link className="navBar__link" to="/fotos">
          Fotos
        </Link>
        <Link className="navBar__link" to="/sobreMi">
          Sobre mí
        </Link>
        <Link className="navBar__link" to="/preguntas">
          Preguntas
        </Link>
        <Link className="navBar__link" to="/contacto">
          Contacto
        </Link>
        <Link className="navBar__link" to="redes">
          RRSS
        </Link>
      </div>
    </nav>
  );
};
export default Nav;
