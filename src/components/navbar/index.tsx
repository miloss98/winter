import { useMediaQuery, HStack, Text, Link, Image } from "native-base";
import { logo } from "../../assets/index";
import { SidebarMenu } from "../index";
import { useState, useEffect } from "react";
import { linksData } from "../../data/links";

interface LinksInterface {
  id: number;
  title: string;
  href: string;
}

export const Navbar = () => {
  const [isSmallScreen] = useMediaQuery({
    maxWidth: 768,
  });
  const [links, setLinks] = useState<LinksInterface[]>([]);

  useEffect(() => {
    setLinks(linksData);
  }, []);

  return (
    <>
      {isSmallScreen ? (
        <HStack
          position="fixed"
          zIndex="9"
          background="rgba(0,0,0,0.5)"
          justifyContent="space-between"
          alignItems="center"
          w="100%"
          h={["50px", "50px"]}
        >
          <Link
            ml={["25px", "25px"]}
            height="100%"
            width={["20%", "10%"]}
            textDecorationLine="none"
            href="/"
            justifyContent="center"
            alignItems="center"
          >
            <Image
              resizeMode="contain"
              source={{ uri: logo }}
              alt="Alternate Text"
              width="100%"
              height={["60%", "80%"]}
            />
          </Link>
          <SidebarMenu />
        </HStack>
      ) : (
        <HStack
          position="fixed"
          zIndex="9"
          background="rgba(0,0,0,0.5)"
          justifyContent="space-around"
          alignItems="center"
          w="100%"
          h="80px"
        >
          <Link
            height="100%"
            width="10%"
            textDecorationLine="none"
            href="/"
            justifyContent="center"
            alignItems="center"
          >
            <Image
              resizeMode="contain"
              source={{ uri: logo }}
              alt="Alternate Text"
              width="100%"
              height="55%"
            />
          </Link>
          <HStack height="100%" alignItems="center">
            {linksData.map((link) => {
              const { id, title, href } = link;
              return (
                <Link
                  key={id}
                  mr="30px"
                  justifyContent="center"
                  _text={{ color: "white" }}
                  _hover={{
                    borderBottomWidth: "3px",
                    borderBottomColor: "orange.500",
                  }}
                  textDecorationLine="none"
                  href={href}
                >
                  <Text
                    color="white"
                    fontSize="1.2rem"
                    textTransform="capitalize"
                  >
                    {title}
                  </Text>
                </Link>
              );
            })}
          </HStack>
        </HStack>
      )}
    </>
  );
};
