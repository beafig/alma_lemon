import { wedding1 } from "../resources/wedding";
import "../styles/layout/Photos.scss";

const Photos = () => {
  return (
    <section className="photos">
      <h1 className="photos__title">Fotos</h1>
      <div className="photos__gallery">
        {wedding1.map((url, index) => (
          <div key={index} className="photos__gallery--photo">
            <img
              src={url}
              alt={`Foto ${index}`}
              className={`photos__gallery--image `}
            />
          </div>
        ))}
      </div>
    </section>
  );
};
export default Photos;
