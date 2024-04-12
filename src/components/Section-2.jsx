
import { useEffect } from "react";
import "../styles/layout/Section2.scss";
import "../styles/layout/Reviews.scss";

const Section2 = () => {
  useEffect(() => {
    if (window.wpShowReviews) {
        window.wpShowReviews(247772, "white");
    }
}, []);
return (
<section className="section2">
  <article className="section2__opinions">
    <h3 className="section2__opinions--title">Vuestras opiniones</h3>
      <div id="wp-widget-reviews">
        <div id="wp-widget-preview">Lee 
          <a href="https://www.bodas.net/fotografos/alma-limon--e247772/opiniones" rel="nofollow">nuestras opiniones</a> en &nbsp;
            <a href='https://www.bodas.net' rel="nofollow">
            <img src="https://cdn1.bodas.net/assets/img/logos/gen_logoHeader.svg" height="20" />
          </a>
        </div>
      </div>
  </article>
  <article className="section2__instagram">
    <h3 className="section2__instagram--title">Instagram</h3>
    <div className="section2__instagram--container">
      <iframe className="section2__instagram--frame"
      src="https://www.instagram.com/p/C5BqoY_qTsn/embed" >       
      </iframe>
      <iframe className="section2__instagram--frame" 
      src="https://www.instagram.com/p/C5TDzpIqiYO/embed/" >
      </iframe>
    </div>
  </article>  
</section>
);
};
export default Section2;
