import { useMediaQuery, HStack, Text, Link, Image } from "native-base";
import DropdownMenu from "./DropdownMenu";
import { logo } from "./../assets/index";

const Header = () => {
  const [isSmallScreen] = useMediaQuery({
    maxWidth: 768,
  });
  return (
    <>
      {isSmallScreen ? (
        <HStack
          bg="gray.800"
          justifyContent={["space-between", "space-between", "space-evenly"]}
          alignItems="center"
          w="100%"
          h={["50px", "60px"]}
        >
          <Link
            ml={["15px", "25px"]}
            height="100%"
            width={["30%", "30%"]}
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
              height={["80%", "80%"]}
            />
          </Link>
          <DropdownMenu />
        </HStack>
      ) : (
        <HStack
          bg="gray.800"
          justifyContent={["space-between", "space-between", "space-around"]}
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
          <HStack>
            <Link textDecorationLine="none" href="/">
              <Text color="white" fontSize="1.4rem" textTransform="capitalize">
                About
              </Text>
            </Link>
            <Link textDecorationLine="none" href="/">
              <Text
                pl="15px"
                color="white"
                fontSize="1.4rem"
                textTransform="capitalize"
              >
                Services
              </Text>
            </Link>
            <Link textDecorationLine="none" href="/">
              <Text
                pl="15px"
                color="white"
                fontSize="1.4rem"
                textTransform="capitalize"
              >
                Pricing
              </Text>
            </Link>
            <Link textDecorationLine="none" href="/">
              <Text
                pl="15px"
                color="white"
                fontSize="1.4rem"
                textTransform="capitalize"
              >
                Contact
              </Text>
            </Link>
          </HStack>
        </HStack>
      )}
    </>
  );
};

export default Header;
