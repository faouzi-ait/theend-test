import React from "react";

function Menu({ obj, setMenu, setIsOpen }) {
  return (
    <div className="title-menu">
      {obj &&
        obj.navCatagories.map((item) => (
          <span
            key={item.name}
            onMouseEnter={() => {
              setMenu(item);
              setIsOpen(true);
            }}
            className="nav-title"
          >
            {item.name}
          </span>
        ))}
    </div>
  );
}

export default Menu;
