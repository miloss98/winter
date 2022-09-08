import { Center, Box, Container, Text, Heading } from "native-base";
import { DividerLine } from "../divider";
import { Packages } from "../packages";

export const Pricing = () => {
  return (
    <div id="pricing">
      <Center w="100%">
        <Container
          pt={["50px", "40px", "40px"]}
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
            All plans come with unlimited disk space. Our support can be as
            quick as 15 minutes to get a response. Sed non mauris vitae erat
            consequat auctor eu in elit. Class aptent taciti sociosqu.
          </Text>
          <DividerLine />
        </Container>
        <Box w="80%">
          <Packages />
        </Box>
      </Center>
    </div>
  );
};
