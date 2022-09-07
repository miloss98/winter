import { Box, Center, VStack, Text, Heading, HStack, Image } from "native-base";
import { DividerLine } from "../divider";
import { useEffect, useState } from "react";
import { servicesbg } from "./../../assets/index";
import { cardsData } from "../../data/cards";
import { Card } from "../card";

export const Services = () => {
  interface CardInterface {
    id: number;
    title: string;
    bgr_url: string;
    icon_url: string;
  }

  const [cardData, setCardData] = useState<CardInterface[]>([]);

  useEffect(() => {
    setCardData(cardsData);
  }, []);
  return (
    <div id="services">
      <Box
        mt={["0px", "200px", "80px", "80px"]}
        w="100vw"
        h={["1700px", "100vh", "100vh", "100vh"]}
        justifyContent="flex-start"
      >
        <Image
          resizeMode="cover"
          source={{ uri: servicesbg }}
          position="absolute"
          alt="Alternate Text"
          width="100%"
          height="100%"
        />
        <HStack
          h={["25%", "30%", "30%", "30%"]}
          w="100%"
          justifyContent="center"
          alignItems="center"
        >
          <VStack
            pb={["250px", "0px", "0px", "0px"]}
            h="100%"
            w="100%"
            justifyContent="center"
            alignItems="center"
          >
            <Heading
              pb="1rem"
              mt={["100px", "100px", "100px", "0px"]}
              fontWeight="500"
              fontSize={["2rem", "2rem", "2.2rem", "3rem"]}
              textTransform="uppercase"
              color="white"
            >
              Our services
            </Heading>
            <Text
              color="white"
              width={["80%", "80%", "80%", "80%"]}
              fontSize={["xs", "sm", "sm", "md"]}
              textAlign="center"
            >
              Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor
              a ornare odio. Sed non mauris vitae erat consequat auctor eu in
              elit. Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos.
            </Text>
            <DividerLine />
          </VStack>
        </HStack>
        <Center
          mt={["100px", "0px", "0px", "0px"]}
          w="100%"
          h={["40%", "80%", "80%", "70%"]}
        >
          <HStack
            w="80%"
            h={["45%", "80%", "80%", "80%"]}
            flexDirection={["column", "row", "row", "row"]}
            justifyContent="space-evenly"
            alignItems={["flex-start", "center", "center", "center"]}
          >
            <Card cardData={cardData} />
          </HStack>
        </Center>
      </Box>
    </div>
  );
};
