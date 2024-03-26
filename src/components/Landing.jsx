import Nav from "./Nav";
import Section1 from "./Section-1";
import Section2 from "./Section-2";
import Footer from "./Footer";

import "../styles/layout/Landing.scss";

const Landing = () => {
  return (
    <div id="landing">
      <Nav />
      <main className="main">
        <div className="main__pic"></div>
        <Section1 scrollY={scrollY} />
        <div className="main__pic main__secondPic"> </div>
        <Section2 />
      </main>
      <Footer />
    </div>
  );
};
export default Landing;
