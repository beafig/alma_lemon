import { Route, Routes } from "react-router-dom";
import Photos from "./Photos";
import Landing from "./Landing";

import "../styles/App.scss";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/fotos" element={<Photos />} />
      </Routes>
    </>
  );
}

export default App;
