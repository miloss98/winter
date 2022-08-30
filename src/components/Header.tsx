import { Box, HStack, IconButton, Icon, Text, Link } from "native-base";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  return (
    <>
      <Box safeAreaTop />
      <HStack
        bg="gray.800"
        justifyContent={["space-between", "space-between", "space-around"]}
        alignItems="center"
        w="100%"
        h={["50px", "60px", "80px"]}
      >
        <Link textDecorationLine="none" href="/">
          <Text
            pl="15px"
            color="white"
            fontSize={["1.2rem", "1.5rem", "2rem"]}
            fontWeight="bold"
            textTransform="uppercase"
          >
            Winter
          </Text>
        </Link>
        <IconButton
          height={["100%", "100%", "50%"]}
          width={["50px", "60px", "50px"]}
          bg="orange.500"
          color="white"
          rounded={0}
          icon={<Icon as={GiHamburgerMenu} name="hamburger" />}
        />
      </HStack>
    </>
  );
};

export default Header;
