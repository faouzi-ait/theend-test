import React, { useState } from "react";
import Menu from "./components/Menu";
import Dropdown from "./components/Dropdown";
import { obj } from "./data/testData";
import "./App.css";

function App() {
  const [menu, setMenu] = useState();
  const [parentNav, setIsOpen] = useState(false);

  console.log(obj.navCatagories);

  return (
    <div className="container" onMouseLeave={() => setIsOpen(false)}>
      <Menu obj={obj} setMenu={setMenu} setIsOpen={setIsOpen} />
      {parentNav && <Dropdown parentNav={parentNav} menu={menu} />}
    </div>
  );
}

export default App;
