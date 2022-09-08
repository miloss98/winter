import { Box, Button, Link } from "native-base";
import { useEffect, useState } from "react";
import { linksData } from "../../data/index";
import "../../styles/sidebar.css";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

interface LinksInterface {
  id: number;
  title: string;
  href: string;
}

export const SidebarMenu = () => {
  const [links, setLinks] = useState<LinksInterface[]>([]);
  const [sidebar, setSidebar] = useState<boolean>(false);

  const toggleSidebar = (): void => {
    setSidebar(!sidebar);
  };
  useEffect(() => {
    setLinks(linksData);
  }, []);
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
          onPress={toggleSidebar}
        >
          {sidebar ? <AiIcons.AiOutlineClose /> : <FaIcons.FaBars />}
        </Button>
      </Box>
      <div className={sidebar ? "nav-menu active" : "nav-menu"}>
        <Box p="0" m="0">
          {/* <a href="#services">Go to Services</a> */}
          {links.map((link) => {
            const { id, title, href } = link;
            return (
              <Link
                key={id}
                onPress={toggleSidebar}
                color="#f5f5f5"
                p="10px"
                href={href}
                textTransform="uppercase"
                _hover={{
                  bgColor: "#ffa500",
                }}
                _text={{
                  letterSpacing: "1px",
                  fontWeight: "bold",
                  fontSize: "sm",
                  pl: "20px",
                  color: "white",
                  textDecoration: "none",
                }}
              >
                {title}
              </Link>
            );
          })}
        </Box>
      </div>
    </>
  );
};
