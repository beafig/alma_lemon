import "../styles/layout/Nav.scss";
import Logo from "../images/logo.jpg";

const Nav = () => {
  return (
    <nav className="navBar">
      <a className="navBar__link" href="">
        <i className="fa-solid fa-house"></i>
      </a>
      <a className="navBar__link" href="">
        Fotos
      </a>
      <a className="navBar__link" href="">
        Preguntas
      </a>
      <img className="navBar__logo" src={Logo} alt="Logo Alma Lemon" />
      <a className="navBar__link" href="">
        Sobre mí
      </a>
      <a className="navBar__link" href="">
        Contacto
      </a>
      <a className="navBar__link" href="">
        RRSS
      </a>
    </nav>
  );
};
export default Nav;
