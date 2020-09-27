import React from "react";
import ImageDisplay from "./ImagesDisplay";

function Dropdown({ parentNav, menu }) {
  return (
    <div className="dropdown-grid">
      {parentNav && (
        <div className="dropdown">
          {menu.children_data.map((name) => (
            <a href={name.url_path} key={name.name}>
              {name.name.substring(0, 15)}
            </a>
          ))}
        </div>
      )}

      <div className="image-container">
        <div className="image-display">
          {menu.dropdown_image_url1 && (
            <ImageDisplay
              image={menu.dropdown_image_url1}
              name={menu.dropdown_image_title1}
            />
          )}
          {menu.dropdown_image_url2 && (
            <ImageDisplay
              image={menu.dropdown_image_url2}
              name={menu.dropdown_image_title2}
            />
          )}
          {menu.dropdown_image_url3 && (
            <ImageDisplay
              image={menu.dropdown_image_url3}
              name={menu.dropdown_image_title3}
            />
          )}
          {menu.dropdown_image_url4 && (
            <ImageDisplay
              image={menu.dropdown_image_url4}
              name={menu.dropdown_image_title4}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Dropdown;
