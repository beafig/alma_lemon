import { useEffect, useState } from "react";
import Nav from "./Nav";
import Section1 from "./Section-1";
import Section2 from "./Section-2";

import "../styles/layout/Landing.scss";

const Landing = () => {
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setViewportHeight(window.innerHeight);
    };
    window.addEventListener("scroll", handleResize);
  }, []);

  return (
    <div id="landing">
      <Nav />
      <main className="main" style={{ height: viewportHeight }}>
        <div className="main__pic"></div>
        <Section1 scrollY={scrollY} />
        <div className="main__pic main__secondPic"> </div>
        <Section2 />
      </main>
    </div>
  );
};
export default Landing;
