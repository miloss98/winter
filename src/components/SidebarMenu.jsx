import { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import "../styles/navbar.css";
//nativebase
import { Box, Button } from "native-base";

const SidebarMenu = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <Box
        h="100%"
        display="flex"
        alignItems="center"
        justifyContent="flex-end"
      >
        <Button
          h="100%"
          fontSize="1.6rem"
          color="white"
          backgroundColor="orange.500"
          rounded="none"
          onPress={showSidebar}
        >
          {sidebar ? <AiIcons.AiOutlineClose /> : <FaIcons.FaBars />}
        </Button>
      </Box>
      <div className={sidebar ? "nav-menu active" : "nav-menu"}>
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
      </div>
    </>
  );
};

export default SidebarMenu;
