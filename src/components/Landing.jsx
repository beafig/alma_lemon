import { useEffect, useState } from "react";
import Nav from "./Nav";
import Logo from "../images/logo.jpg";
import Main from "../images/boda.jpg";
import boda from "../images/boda1.jpeg";
import infantil from "../images/infantil.jpeg";
import empresa from "../images/empresa.jpeg";
import pareja from "../images/pareja.jpeg";
import social from "../images/social.jpeg";

import "../styles/layout/Landing.scss";

const Landing = () => {
  const [scrollY, setScrollY] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleResize = () => {
      setViewportHeight(window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleResize);
  }, []);

  return (
    <div id="landing">
      <Nav />
      <main className="main" style={{ height: viewportHeight }}>
        <img className="main__mainPic" src={Main} alt="" />
        <section
          className="main__section1"
          style={{ transform: `translateY(-${scrollY}px)` }}>
          <article className="main__slogan">
            <img className="main__slogan--logo" src={Logo} alt="" />
            <h3 className="main__slogan--subtitle">SLOGAN SUPERCHULO</h3>{" "}
          </article>
          <article className="main__categories">
            <h1 className="main__categories--title">ALMA LIMÓN</h1>
            <div className="main__categories--list">
              <div className="main__categories--container">
                <img className="main__categories--img" src={boda} alt="" />
                <h6 className="main__categories--name">Bodas</h6>
              </div>
              <div className="main__categories--container">
                <img className="main__categories--img" src={infantil} alt="" />
                <h6 className="main__categories--name">Infantil</h6>
              </div>
              <div className="main__categories--container">
                <img className="main__categories--img" src={empresa} alt="" />
                <h6 className="main__categories--name">Empresa</h6>
              </div>
              <div className="main__categories--container">
                <img className="main__categories--img" src={pareja} alt="" />
                <h6 className="main__categories--name">Pareja</h6>
              </div>
              <div className="main__categories--container">
                <img className="main__categories--img" src={social} alt="" />
                <h6 className="main__categories--name">Social</h6>
              </div>
            </div>
          </article>
          <img className="main__secondPic" src={Main} alt="" />

          <article className="main__opinions">
            <h3 className="main__opinions--title">Vuestras opiniones</h3>
            <div className="main__opinions--container">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus consequuntur nisi, minus tempora praesentium vel?
                Accusamus libero minima perferendis quod commodi, facere rem a.
                Facilis consectetur inventore eum ut nemo?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus consequuntur nisi, minus tempora praesentium vel?
                Accusamus libero minima perferendis quod commodi, facere rem a.
                Facilis consectetur inventore eum ut nemo?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus consequuntur nisi, minus tempora praesentium vel?
                Accusamus libero minima perferendis quod commodi, facere rem a.
                Facilis consectetur inventore eum ut nemo?
              </p>
            </div>
          </article>
          <article className="main__instagram">
            <h3 className="main__instagram--title">Instagram</h3>
          </article>
        </section>
      </main>
    </div>
  );
};
export default Landing;
