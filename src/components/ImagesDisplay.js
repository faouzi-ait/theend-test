import React from "react";

function ImagesDisplay({ image, name }) {
  return (
    <div>
      <img src={image} alt="img" />
      <p>{name}</p>
    </div>
  );
}

export default ImagesDisplay;
