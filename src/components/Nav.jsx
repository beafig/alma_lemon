import { Link } from "react-router-dom";
import "../styles/layout/Nav.scss";
import Logo from "../images/logo.jpg";

const Nav = () => {
  return (
    <>
      <nav className="navBar">
        <a className="navBar__link" href="">
          <i className="fa-solid fa-house"></i>
        </a>

        <Link className="navBar__link" to="/fotos">
          Fotos
        </Link>
        <Link className="navBar__link" to="/sobreMi">
          Sobre mí
        </Link>
        <img className="navBar__logo" src={Logo} alt="Logo Alma Lemon" />
        <Link className="navBar__link" to="/preguntas">
          Preguntas
        </Link>
        <Link className="navBar__link" to="/contacto">
          Contacto
        </Link>
        <Link className="navBar__link" to="redes">
          RRSS
        </Link>
      </nav>
    </>
  );
};
export default Nav;
