import { Route, Routes } from "react-router-dom";
import Fotos from "./Fotos";
import Landing from "./Landing";

import "../styles/App.scss";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/fotos" element={<Fotos />} />
      </Routes>
    </>
  );
}

export default App;
