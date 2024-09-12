import React, { useState } from "react";
import Menu from "./components/Menu";
import Dropdown from "./components/Dropdown";
import { obj } from "./data/testData";
import "./App.css";

function App() {
  const [menu, setMenu] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [currentMenu, setCurrentMenu] = useState("");

  return (
    <>
      <div className="header">
        free uk deliveries on all orders over £100 | free uk returns
      </div>
      <div className="container" onMouseLeave={() => setIsOpen(false)}>
        <Menu
          obj={obj}
          setMenu={setMenu}
          setIsOpen={setIsOpen}
          currentMenu={currentMenu}
          setCurrentMenu={setCurrentMenu}
        />
        {isOpen && <Dropdown menu={menu} />}
      </div>
    </>
  );
}

export default App;
