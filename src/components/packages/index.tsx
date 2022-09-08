import { VStack, Center, Box, Button, Text, Heading } from "native-base";
export const Packages = () => {
  return (
    <VStack w="100%">
      <Center mt="2rem" h="70px" bgColor="orange.500">
        <Heading size="md" letterSpacing="1px">
          Basic
        </Heading>
      </Center>
      <Heading
        textAlign="center"
        w="100%"
        p="15px"
        fontWeight="400"
        borderBottomWidth="1px"
        borderBottomColor="gray.400"
        color="orange.600"
      >
        $27.50
      </Heading>

      <Text
        textAlign="center"
        w="100%"
        p="15px"
        borderBottomWidth="1px"
        borderBottomColor="gray.400"
        color="gray.600"
      >
        2000gb band width
      </Text>
      <Text
        textAlign="center"
        w="100%"
        p="15px"
        borderBottomWidth="1px"
        borderBottomColor="gray.400"
        color="gray.600"
      >
        32gb memory
      </Text>
      <Text
        textAlign="center"
        w="100%"
        p="15px"
        borderBottomWidth="1px"
        borderBottomColor="gray.400"
        color="gray.600"
      >
        Support 24 hours
      </Text>
      <Text
        textAlign="center"
        w="100%"
        p="15px"
        borderBottomWidth="1px"
        borderBottomColor="gray.400"
        color="gray.600"
      >
        Update $20
      </Text>

      <Button
        mt="10px"
        h="50px"
        w="100%"
        bgColor="gray.800"
        variant="outline"
        _text={{
          color: "white",
          fontWeight: "600",
          textTransform: "uppercase",
        }}
        _hover={{
          bgColor: "gray.700",
        }}
      >
        Order now
      </Button>
    </VStack>
  );
};
