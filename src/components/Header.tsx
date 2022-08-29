import { Box, HStack, IconButton, Icon, Text, Link } from "native-base";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  return (
    <>
      <Box safeAreaTop />
      <HStack
        bg="gray.800"
        justifyContent="space-between"
        alignItems="center"
        w="100%"
        height="100%"
      >
        <Link textDecorationLine="none" href="/">
          <Text
            pl="15px"
            color="white"
            fontSize="30"
            fontWeight="bold"
            textTransform="uppercase"
          >
            Winter
          </Text>
        </Link>
        <IconButton
          height="50px"
          width="50px"
          bg="orange.500"
          color="white"
          rounded={0}
          icon={<Icon as={GiHamburgerMenu} size="lg" name="hamburger" />}
        />
      </HStack>
    </>
  );
};

export default Header;
