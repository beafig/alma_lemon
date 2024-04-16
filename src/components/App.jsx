import { Route, Routes } from "react-router-dom";
import Photos from "./Photos";
import Landing from "./Landing";
import AboutMe from "./AboutMe";

import "../styles/App.scss";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/fotos" element={<Photos />} />
        <Route path="/sobremi" element={<AboutMe />} />
      </Routes>
    </>
  );
}

export default App;
