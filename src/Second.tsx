import { useNavigate } from "react-router-dom";

const images = [
  {
    url: "https://s7d1.scene7.com/is/image/mcdonalds/DC_202002_6053_LargeFries_1564x1564-1:nutrition-calculator-tile?resmode=sharp2",
    place: "Fries",
  },

  {
    url: "https://m.media-amazon.com/images/I/71YElaLt6lL.jpg",
    place: "Perro Caliente",
  },
  {
    url: "https://www.healthyheartywholesome.co.uk/wp-content/uploads/2022/09/1662992692509-scaled-e1674829841428.jpeg",
    place: "Beans",
  },
  {
    url: "https://www.justonecookbook.com/wp-content/uploads/2024/03/Kake-Udon-7549-I-1-500x375.jpg",
    place: "Noodles",
  },
];

const Second = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/third");
  };

  return (
    <div>
      <h1>Pick a Food Item</h1>
      <div className="wrap">
        {images.map((image) => {
          return (
            <div>
              <img src={image.url} onClick={handleNavigate} />
              <h3>{image.place}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Second;
