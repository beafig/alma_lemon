import "../styles/layout/Section1.scss";
import Logo from "../images/logo.jpg";
import boda from "../images/boda1.jpeg";
import infantil from "../images/infantil.jpeg";
import empresa from "../images/empresa.jpeg";
import pareja from "../images/pareja.jpeg";
import social from "../images/social.jpeg";

const Section1 = () => {
  return (
    <section className="section1">
      <article className="section1__slogan">
        <img className="section1__slogan--logo" src={Logo} alt="" />
        <h3 className="section1__slogan--subtitle">SLOGAN SUPERCHULO</h3>
      </article>
      <article className="section1__categories">
        <h1 className="section1__categories--title">ALMA LIMÓN</h1>
        <div className="section1__categories--list">
          <div className="section1__categories--container">
            <img className="section1__categories--img" src={boda} alt="" />
            <h6 className="section1__categories--name">Bodas</h6>
          </div>
          <div className="section1__categories--container">
            <img className="section1__categories--img" src={infantil} alt="" />
            <h6 className="section1__categories--name">Infantil</h6>
          </div>
          <div className="section1__categories--container">
            <img className="section1__categories--img" src={empresa} alt="" />
            <h6 className="section1__categories--name">Empresa</h6>
          </div>
          <div className="section1__categories--container">
            <img className="section1__categories--img" src={pareja} alt="" />
            <h6 className="section1__categories--name">Pareja</h6>
          </div>
          <div className="section1__categories--container">
            <img className="section1__categories--img" src={social} alt="" />
            <h6 className="section1__categories--name">Social</h6>
          </div>
        </div>
      </article>
    </section>
  );
};
export default Section1;
