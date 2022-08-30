import { useMediaQuery, HStack, Text, Link } from "native-base";
import DropdownMenu from "./DropdownMenu";

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
          <Link textDecorationLine="none" href="/">
            <Text
              pl="15px"
              color="white"
              fontSize={["1.5rem", "2rem"]}
              fontWeight="bold"
              textTransform="uppercase"
            >
              Winter
            </Text>
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
          <Link textDecorationLine="none" href="/">
            <Text
              pl="15px"
              color="white"
              fontSize="2rem"
              fontWeight="bold"
              textTransform="uppercase"
            >
              Winter
            </Text>
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
