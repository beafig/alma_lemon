import { Link } from "react-router-dom";
import "../styles/layout/Section1.scss";
import Logo from "../images/logo.jpg";
import boda from "../images/boda1.jpeg";
import infantil from "../images/infantil.jpeg";
import empresa from "../images/empresa.jpeg";
import pareja from "../images/pareja.jpeg";
import embarazo from "../images/embarazo.jpeg";
import social from "../images/social.jpeg";

const Section1 = () => {
  return (
    <section className="section1">
      <article className="section1__slogan">
        <img
          className="section1__slogan--logo"
          src={Logo}
          alt="Logo Alma Limón"
        />
        <h3 className="section1__slogan--title">SLOGAN SUPERCHULO</h3>
      </article>
      <article className="section1__categories">
        <h1 className="section1__categories--title">ALMA LIMÓN</h1>
        <p className="section1__categories--subtitle">
          · Presentes en todos tus momentos ·
        </p>
        <div className="section1__categories--list">
          <Link to={"/bodas"} className="section1__categories--link">
            <img className="section1__categories--img" src={boda} alt="" />·
            Bodas ·
          </Link>
          <Link to={"/infantil"} className="section1__categories--link">
            <img className="section1__categories--img" src={infantil} alt="" />·
            Infantil ·
          </Link>
          <Link to={"/empresa"} className="section1__categories--link">
            <img className="section1__categories--img" src={empresa} alt="" />·
            Empresa ·
          </Link>
          <Link to={"/pareja"} className="section1__categories--link">
            <img className="section1__categories--img" src={pareja} alt="" />·
            Pareja ·
          </Link>
          <Link to={"/embarazo"} className="section1__categories--link">
            <img className="section1__categories--img" src={embarazo} alt="" />·
            Embarazo ·
          </Link>
          <Link to={"/social"} className="section1__categories--link">
            <img className="section1__categories--img" src={social} alt="" />·
            Social ·
          </Link>
        </div>
      </article>
    </section>
  );
};
export default Section1;
