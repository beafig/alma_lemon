import { useState } from "react";
import { wedding1 } from "../resources/wedding";
import "../styles/layout/Photos.scss";
import { Link } from "react-router-dom";

const Photos = () => {

  // const [isClicked, setIsClicked] = useState(false);
  const [clickedPhoto, setClickedPhoto] = useState({});
  function handleClickPhoto(index) {
    const newClickedPhotos = { ...clickedPhoto };
    newClickedPhotos[index] = !newClickedPhotos[index];
    // !dos opciones, al hacer click se abre, otro click cierra o añadir icono X para cerrar
    // newClickedPhotos[index] = true;
    setClickedPhoto(newClickedPhotos);
  }

  return (
    <section className="photos">
      <div className="photos__title--container">
        <Link to="/" className="photos__title--link">
        <i className="fa-solid fa-arrow-left photos__title--arrow"></i>
        </Link>
        <h1 className="photos__title">Fotos</h1>
      </div>
      <div className="photos__gallery">
        {wedding1.map((url, index) => (
          <div key={index} className={clickedPhoto[index] ? "photos__gallery--photo clickedC" : "photos__gallery--photo"}  onClick={()=>handleClickPhoto(index)}>
            <img
              src={url}
              alt={`Foto ${index}`}
              className={clickedPhoto[index] ? "photos__gallery--image clickedPH" : "photos__gallery--image"}
            />
          </div>
        ))}
      </div>
    </section>
  );
};
export default Photos;
