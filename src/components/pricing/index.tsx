import { Center, Box, Container, Text, Heading } from "native-base";
import { useEffect, useState } from "react";
import { DividerLine } from "../divider";
import { Packages } from "../packages";
import { packagesData } from "../../data/packages";

interface PricesInterface {
  id: number;
  name: string;
  price: string;
  bandwidth: string;
  memory: string;
  support: string;
  update: string;
}

export const Pricing = () => {
  const [pricesData, setPricesData] = useState<PricesInterface[]>([]);

  useEffect(() => {
    setPricesData(packagesData);
  }, []);

  return (
    <div id="pricing">
      <Center mb="2rem" w="100%">
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
          <Packages pricesData={pricesData} />
        </Box>
      </Center>
    </div>
  );
};
