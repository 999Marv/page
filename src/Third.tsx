import { useNavigate } from "react-router-dom";
import dashund from "./public/7384ad04-3c79-4896-b79c-b3fd33b454d3.webp";

const Third = () => {
  const navigate = useNavigate();

  const handleLose = () => {
    navigate("/lose");
  };

  const handleWin = () => {
    navigate("/win");
  };

  const images = [
    {
      url: dashund,
      place: "Dashund",
      send: handleWin,
    },

    {
      url: "https://i.pinimg.com/736x/2f/5d/4f/2f5d4f5f477d2d87f42a5802f32cda0e.jpg",
      place: "Weird",

      send: handleLose,
    },
    {
      url: "https://www.joyfy.com/wp-content/uploads/2022/08/Adult-Halloween-Inflatable-Banana-Costume-1_result-2.webp",
      place: "Weird Banana",
      send: handleLose,
    },
    {
      url: "https://m.media-amazon.com/images/I/61ciJbVmifS._AC_UY1000_.jpg",
      place: "Weird Frog",
      send: handleLose,
    },
  ];

  return (
    <div>
      <h1>Pick a Food Item</h1>
      <div className="wrap">
        {images.map((image) => {
          return (
            <div>
              <img src={image.url} onClick={image.send} />
              <h3>{image.place}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Third;
