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
          justifyContent={["space-between", "space-between"]}
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
            <Link
              mr="30px"
              justifyContent="center"
              _text={{ color: "white" }}
              _hover={{
                borderBottomWidth: "3px",
                borderBottomColor: "orange.500",
              }}
              textDecorationLine="none"
              href="/"
            >
              <Text color="white" fontSize="1.2rem" textTransform="capitalize">
                About
              </Text>
            </Link>
            <Link
              mr="30px"
              justifyContent="center"
              _text={{ color: "white" }}
              _hover={{
                borderBottomWidth: "3px",
                borderBottomColor: "orange.500",
              }}
              textDecorationLine="none"
              href="/"
            >
              <Text color="white" fontSize="1.2rem" textTransform="capitalize">
                Services
              </Text>
            </Link>
            <Link
              mr="30px"
              justifyContent="center"
              _text={{ color: "white" }}
              _hover={{
                borderBottomWidth: "3px",
                borderBottomColor: "orange.500",
              }}
              textDecorationLine="none"
              href="/"
            >
              <Text color="white" fontSize="1.2rem" textTransform="capitalize">
                Pricing
              </Text>
            </Link>
            <Link
              mr="30px"
              justifyContent="center"
              _text={{ color: "white" }}
              _hover={{
                borderBottomWidth: "3px",
                borderBottomColor: "orange.500",
              }}
              textDecorationLine="none"
              href="/"
            >
              <Text color="white" fontSize="1.2rem" textTransform="capitalize">
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
