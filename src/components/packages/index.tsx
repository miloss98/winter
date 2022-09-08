import { VStack, Center, Button, Text, Heading } from "native-base";

interface PricesInterface {
  id: number;
  name: string;
  price: string;
  bandwidth: string;
  memory: string;
  support: string;
  update: string;
}
interface PackageInterface {
  pricesData: PricesInterface[];
}
export const Packages = (props: PackageInterface) => {
  return (
    <>
      {props?.pricesData.map((data) => {
        const { id, name, price, bandwidth, memory, support, update } = data;
        return (
          <VStack key={id} w="100%">
            <Center mt="2rem" h="70px" bgColor="orange.500">
              <Heading size="md" letterSpacing="1px">
                {name}
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
              {price}
            </Heading>

            <Text
              textAlign="center"
              w="100%"
              p="15px"
              borderBottomWidth="1px"
              borderBottomColor="gray.400"
              color="gray.600"
            >
              {bandwidth} bandwidth
            </Text>
            <Text
              textAlign="center"
              w="100%"
              p="15px"
              borderBottomWidth="1px"
              borderBottomColor="gray.400"
              color="gray.600"
            >
              {memory} memory
            </Text>
            <Text
              textAlign="center"
              w="100%"
              p="15px"
              borderBottomWidth="1px"
              borderBottomColor="gray.400"
              color="gray.600"
            >
              {support} support
            </Text>
            <Text
              textAlign="center"
              w="100%"
              p="15px"
              borderBottomWidth="1px"
              borderBottomColor="gray.400"
              color="gray.600"
            >
              {update} update
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
      })}
    </>
  );
};
