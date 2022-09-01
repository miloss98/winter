import { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import "./navbar.css";

const SidebarMenu = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <div className="navbar">
        <button className="menu-bars" onClick={showSidebar}>
          {sidebar ? <AiIcons.AiOutlineClose /> : <FaIcons.FaBars />}
        </button>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="nav-text">
            <a href="#about"> About </a>
          </li>
          <li className="nav-text">
            <a href="#services"> Services </a>
          </li>
          <li className="nav-text">
            <a href="#pricing"> Pricing </a>
          </li>
          <li className="nav-text">
            <a href="#contact"> Contact </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default SidebarMenu;
