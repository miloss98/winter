import { VStack, Center, Button, Text, Heading } from "native-base";
import { PricesInterface } from "../../sections/pricing";

interface PackageInterface {
  packagesData: PricesInterface[];
}
export const Packages = (props: PackageInterface) => {
  return (
    <>
      {props?.packagesData.map((data) => {
        const { id, name, price, bandwidth, memory, support, update } = data;
        return (
          <VStack
            key={id}
            w="100%"
            flexDirection={["column", "column", "column", "row"]}
            alignItems="center"
            mb="1rem"
          >
            <Center
              w={["100%", "100%", "100%", "200px"]}
              mt={["2rem", "2rem", "2rem", "0rem"]}
              h="70px"
              bgColor="orange.500"
            >
              <Heading size="md" letterSpacing="1px">
                {name}
              </Heading>
            </Center>
            <Heading
              bold
              textAlign="center"
              size="md"
              w={["100%", "100%", "100%", "50%"]}
              p={["15px", "15px", "15px", "0px"]}
              fontWeight="400"
              borderBottomWidth={["1px", "1px", "1px", "0px"]}
              borderBottomColor={["gray.400", "gray.400", "gray.400", "none"]}
              color="orange.500"
            >
              {price}
            </Heading>

            <Text
              textAlign="center"
              w={["100%", "100%", "100%", "50%"]}
              p={["15px", "15px", "15px", "0px"]}
              borderBottomWidth={["1px", "1px", "1px", "0px"]}
              borderBottomColor={["gray.400", "gray.400", "gray.400", "none"]}
              color={["gray.600", "gray.600", "black", "black"]}
            >
              {bandwidth} bandwidth
            </Text>
            <Text
              textAlign="center"
              w={["100%", "100%", "100%", "50%"]}
              p={["15px", "15px", "15px", "0px"]}
              borderBottomWidth={["1px", "1px", "1px", "0px"]}
              borderBottomColor={["gray.400", "gray.400", "gray.400", "none"]}
              color={["gray.600", "gray.600", "black", "black"]}
            >
              {memory} memory
            </Text>
            <Text
              textAlign="center"
              w={["100%", "100%", "100%", "50%"]}
              p={["15px", "15px", "15px", "0px"]}
              borderBottomWidth={["1px", "1px", "1px", "0px"]}
              borderBottomColor={["gray.400", "gray.400", "gray.400", "none"]}
              color={["gray.600", "gray.600", "black", "black"]}
            >
              {support} support
            </Text>
            <Text
              textAlign="center"
              w={["100%", "100%", "100%", "50%"]}
              p={["15px", "15px", "15px", "0px"]}
              borderBottomWidth={["1px", "1px", "1px", "0px"]}
              borderBottomColor={["gray.400", "gray.400", "gray.400", "none"]}
              color={["gray.600", "gray.600", "black", "black"]}
            >
              {update} update
            </Text>

            <Button
              mt={["10px", "10px", "10px", "0px"]}
              h="50px"
              w={["100%", "100%", "100%", "150px"]}
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
              _pressed={{
                bgColor: "gray.500",
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
