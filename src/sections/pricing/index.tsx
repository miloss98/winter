import { Center, Box, Container, Text, Heading } from "native-base";
import { DividerLine, Packages } from "../../components/index";
import { packagesData } from "../../data/index";

export interface PricesInterface {
  id: number;
  name: string;
  price: string;
  bandwidth: string;
  memory: string;
  support: string;
  update: string;
}

export const Pricing = () => {
  return (
    <Center nativeID="pricing" mb={["2rem", "2rem", "2rem", "8rem"]} w="100%">
      <Container
        mt={["5rem", "2rem", "2rem", "5rem"]}
        pt={["40px", "40px", "60px", "40px"]}
        bgColor="white"
        justifyContent="space-around"
        alignItems="center"
      >
        <Heading
          pb="1rem"
          fontWeight="500"
          fontSize={["2rem", "2rem", "2.2rem", "3rem"]}
          textTransform="uppercase"
        >
          Pricing
        </Heading>
        <Text
          width={["100%", "100%", "80%", "80%"]}
          fontSize={["xs", "sm", "sm", "md"]}
          textAlign="center"
        >
          All plans come with unlimited disk space. Our support can be as quick
          as 15 minutes to get a response. Sed non mauris vitae erat consequat
          auctor eu in elit. Class aptent taciti sociosqu.
        </Text>
        <DividerLine />
      </Container>
      <Box mt="3rem" w="80%">
        <Packages packagesData={packagesData} />
      </Box>
    </Center>
  );
};
