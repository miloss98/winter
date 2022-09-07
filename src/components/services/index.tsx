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
        mt="80px"
        w="100vw"
        h="100vh"
        justifyContent="space-evenly"
        bgColor="red.500"
      >
        <Image
          resizeMode="cover"
          source={{ uri: servicesbg }}
          position="absolute"
          alt="Alternate Text"
          width="100%"
          height="100%"
        />
        <HStack h="25%" w="100%" justifyContent="center" alignItems="center">
          <VStack h="100%" w="100%" justifyContent="center" alignItems="center">
            <Heading
              pb="1rem"
              mt="70px"
              fontWeight="500"
              fontSize={["2rem", "2rem", "2.2rem", "3rem"]}
              textTransform="uppercase"
              color="white"
            >
              Our services
            </Heading>
            <Text
              color="white"
              width={["100%", "100%", "80%", "80%"]}
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
        <Center w="100%" h="80%">
          <Card cardData={cardData} />
        </Center>
      </Box>
    </div>
  );
};
