import { useMediaQuery, HStack, Link, Image } from "native-base";
import { logo } from "../../assets/index";
import { NavLinks, SidebarMenu } from "../index";

export const Navbar = () => {
  const [isSmallScreen] = useMediaQuery({
    maxWidth: 768,
  });

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
          {/* nav links */}
          <HStack height="100%" alignItems="center">
            <NavLinks />
          </HStack>
        </HStack>
      )}
    </>
  );
};
