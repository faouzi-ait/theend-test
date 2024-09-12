import React from "react";

function Menu({ obj, setMenu, setCurrentMenu, currentMenu, setIsOpen }) {
  const { navCatagories } = obj;

  return (
    <div className="title-menu">
      {obj &&
        navCatagories.map((item) => (
          <span
            key={item.name}
            onMouseEnter={() => {
              setCurrentMenu(item.name)
              setIsOpen(true);
              setMenu(item);
            }}
            className={`${item.name === currentMenu ? 'nav-title' : ''}`}
          >
            {item.name}
          </span>
        ))}
    </div>
  );
}

export default Menu;
