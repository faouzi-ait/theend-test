import React, { Fragment } from "react";
import ImageDisplay from "./ImagesDisplay";

function Dropdown({ menu }) {
  const columns = {
    one: menu.children_data.filter(
      (item) =>
        item.include_in_menu === 1 &&
        !item.include_in_menu_column2 &&
        !item.include_in_menu_column3
    ),
    two: menu.children_data.filter(
      (item) =>
        item.include_in_menu === 1 &&
        item.include_in_menu_column2 &&
        !item.include_in_menu_column3
    ),
    three: menu.children_data.filter(
      (item) =>
        item.include_in_menu === 1 &&
        !item.include_in_menu_column2 &&
        item.include_in_menu_column3
    ),
  };

  const DisplayColumn = ({ column }) => {
    return (
      <div className="dropdown">
        {column.map((item) => (
          <Fragment key={item.id}>
            {item.is_column_header && (
              <a href={item.url_path} key={item.id} className="title">
                {item.custom_category_name}
              </a>
            )}
            {!item.is_column_header && (
              <a href={item.url_path} key={item.id}>
                {item.name}
              </a>
            )}
          </Fragment>
        ))}
      </div>
    );
  };

  return (
    <div className="dropdown-grid">
      {columns.one && <DisplayColumn column={columns.one} />}
      {columns.two && <DisplayColumn column={columns.two} />}
      {columns.three && <DisplayColumn column={columns.three} />}

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
