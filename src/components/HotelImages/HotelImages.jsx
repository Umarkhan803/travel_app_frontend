import "./HotelImages.css";

export const HotelImages = ({ singleHotel }) => {
  const { image, imageArr } = singleHotel;

  return (
    <div className="hotel-image-container d-flex gap-small">
      <div className="primary-image-container">
        <img className="primary-img" src={image} alt="hotel" />
      </div>
      <div className="arrImg">
        {imageArr &&
          imageArr.map((image) => (
            <img key={image} className="hotel-img" src={image} alt="hotel" />
          ))}
      </div>
    </div>
  );
};
