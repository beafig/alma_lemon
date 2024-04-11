
import "../styles/layout/Section2.scss";


const Section2 = () => {

  return (
    <section className="section2">
      <article className="section2__opinions">
        <h3 className="section2__opinions--title">Vuestras opiniones</h3>
        <div className="section2__opinions--container">
          <p className="section2__opinions--text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            consequuntur nisi, minus tempora praesentium vel? Accusamus libero
            minima perferendis quod commodi, facere rem a. Facilis consectetur
            inventore eum ut nemo?
          </p>
          <p className="section2__opinions--text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            consequuntur nisi, minus tempora praesentium vel? Accusamus libero
            minima perferendis quod commodi, facere rem a. Facilis consectetur
            inventore eum ut nemo?
          </p>
          <p className="section2__opinions--text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            consequuntur nisi, minus tempora praesentium vel? Accusamus libero
            minima perferendis quod commodi, facere rem a. Facilis consectetur
            inventore eum ut nemo?
          </p>
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