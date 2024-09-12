import React from "react";

function ImagesDisplay({ image, name }) {
  return (
    <div>
      <img src={image} alt="img" />
      <p style={{ marginTop: 0 }}>{name}</p>
    </div>
  );
}

export default ImagesDisplay;
