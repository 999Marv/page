import { useNavigate } from "react-router-dom";

const images = [
  {
    url: "https://media.nomadicmatt.com/2022/halongbaycheap.jpeg",
    place: "cool islands",
  },

  {
    url: "https://res.cloudinary.com/djcyhbk2e/image/upload/c_fit,f_auto,h_800,q_35,w_800/v1/gvv/prod/oezxhy6f8zixb9lvntcg",
    place: "Mexico",
  },
  {
    url: "https://imgcdn.stablediffusionweb.com/2024/5/12/588ce825-85e5-4b90-94d6-1765a5f89125.jpg",
    place: "Buttannia",
  },
  {
    url: "https://a.storyblok.com/f/55469/1176x732/3070577851/jp_-_2022.png",
    place: "Japan",
  },
];

const First = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/second");
  };

  return (
    <div>
      <h1>Welcome to our date adventure!</h1>
      <h2>Pick a destination</h2>
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

export default First;
