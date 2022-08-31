import { Link, Text, Menu, Pressable, HamburgerIcon, Box } from "native-base";
const DropdownMenu = () => {
  return (
    <Box alignItems="center">
      <Menu
        w="190"
        height="190"
        trigger={(triggerProps) => {
          console.log(triggerProps);
          return (
            <Pressable
              justifyContent="center"
              alignItems="center"
              size={["50px", "70px"]}
              backgroundColor="orange.500"
              accessibilityLabel="More options menu"
              {...triggerProps}
            >
              <HamburgerIcon color="white" size={["25px", "35px"]} />
            </Pressable>
          );
        }}
      >
        <Menu.Item>
          <Link textDecorationLine="none" href="/">
            <Text color="white" fontSize="1.4rem" textTransform="capitalize">
              About
            </Text>
          </Link>
        </Menu.Item>
        <Menu.Item>
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
        </Menu.Item>
        <Menu.Item>
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
        </Menu.Item>
        <Menu.Item>
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
        </Menu.Item>
      </Menu>
    </Box>
  );
};
export default DropdownMenu;
