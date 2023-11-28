import { FC } from "react";
// import { slides } from "./data";

interface ImagesProps {
  data: {
    src: string;
    title: string;
    description: string;
  }[];
  onClick: (index:number) => void;
}
const Images: FC<ImagesProps> = (props) => {
  const { data, onClick } = props;

  const handleClickImage = (index: number) => {
    onClick(index);
  };

  return (
    <div className="images-container">
      {data.map((slides, index) => (
        <div
          onClick={() => handleClickImage(index)}
          key={index}
          className="image"
        >
          <img src={slides.src} alt={slides.description} />
        </div>
      ))}
    </div>
  );
};

export default Images;
