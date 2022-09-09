import { Center, HStack, Text } from "native-base";

export const Footer = () => {
  return (
    <HStack h="80px" w="100%" bgColor="gray.800">
      <Center w="100%">
        <Text
          textAlign="center"
          bold
          fontSize={["xs", "xs", "sm", "sm"]}
          color="white"
        >
          COPYRIGHT © Lorem ipsum dolor sit amet consectetur.
        </Text>
      </Center>
    </HStack>
  );
};
