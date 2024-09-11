import React, { Fragment } from "react";
import ImageDisplay from "./ImagesDisplay";

function Dropdown({ parentNav, menu }) {
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

  console.log(columns);

  return (
    <div className="dropdown-grid">
      {parentNav && (
        <>
          <div className="dropdown">
            {columns.one.map((item) => (
              <Fragment key={item.id}>
                {item.is_column_header && (
                  <a href={item.url_path} key={item.id} className="title">
                    {item.custom_category_name}
                  </a>
                )}
                {!item.is_column_header && (
                  <a href={item.url_path} key={item.id}>
                    {item.name.substring(0, 17)}
                  </a>
                )}
              </Fragment>
            ))}
          </div>
        </>
      )}

      {parentNav && (
        <>
          <div className="dropdown">
            {columns.two.map((item) => (
              <Fragment key={item.id}>
                {item.is_column_header && (
                  <a href={item.url_path} key={item.id} className="title">
                    {item.custom_category_name}
                  </a>
                )}
                {!item.is_column_header && (
                  <a href={item.url_path} key={item.id}>
                    {item.name.substring(0, 17)}
                  </a>
                )}
              </Fragment>
            ))}
          </div>
        </>
      )}

      {parentNav && (
        <>
          <div className="dropdown">
            {columns.three.map((item) => (
              <Fragment key={item.id}>
                {item.is_column_header && (
                  <a href={item.url_path} key={item.id} className="title">
                    {item.custom_category_name}
                  </a>
                )}
                {!item.is_column_header && (
                  <a href={item.url_path} key={item.id}>
                    {item.name.substring(0, 17)}
                  </a>
                )}
              </Fragment>
            ))}
          </div>
        </>
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
