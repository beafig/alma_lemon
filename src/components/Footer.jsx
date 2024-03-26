import "../styles/layout/Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__text">
        Alma Limón 2024 &copy; Creado por{" "}
        <a
          className="footer__link"
          href="https://www.linkedin.com/in/bea-figueroa/"
          target="_blanck">
          Bea
        </a>
      </p>
      <div className="footer__icons">
        <a
          className="footer__link"
          href="https://www.instagram.com/almalimon_photo?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          target="_blank">
          <i className="fa-brands fa-instagram footer__icon"></i>
        </a>
        <a
          className="footer__link"
          href="https://www.linkedin.com/in/alicia-%C3%A1lvarez-29368bb9/"
          target="_blank">
          <i className="fa-brands fa-linkedin footer__icon"></i>
        </a>
        <a href="mailto:alyap4@gmail.com" className="footer__link">
          <i className="fa-regular fa-envelope footer__icon"></i>
        </a>
      </div>
    </footer>
  );
};
export default Footer;
