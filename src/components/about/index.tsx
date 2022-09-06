import {
  Box,
  Container,
  Button,
  Text,
  HStack,
  Divider,
  Heading,
  Center,
  Image,
} from "native-base";
import { aboutimage1, aboutimage2 } from "../../assets/index";
import { useState, useEffect } from "react";
import { Accordion } from "./../index";
import { accordionsData } from "../../data/accordions";
import { buttonsData } from "../../data/buttons";

export const About = () => {
  interface AccordionInterface {
    id: number;
    title: string;
    heading: string;
    content: ContentInterface;
  }

  interface ContentInterface {
    first: string;
    second: string;
  }

  interface ButtonInterface {
    id: number;
    title: string;
  }

  const [data, setData] = useState<AccordionInterface[]>([]);
  const [btnData, setBtnData] = useState<ButtonInterface[]>();
  const [value, setValue] = useState<number>(0);

  useEffect(() => {
    setData(accordionsData);
    setBtnData(buttonsData);
  }, []);

  return (
    <Box
      w="100vw"
      justifyContent="flex-start"
      alignItems="center"
      bgColor="whitex"
    >
      {/* Info */}
      <Container
        pt="40px"
        h="35%"
        bgColor="white"
        justifyContent="space-around"
        alignItems="center"
      >
        <Heading
          pb="1rem"
          fontWeight="500"
          fontSize="3rem"
          textTransform="uppercase"
        >
          About us
        </Heading>
        <Text width="80%" textAlign="center">
          Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat
          ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh
          vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam
          nec tellus a odio tincidunt auctor a ornare odio.
        </Text>
        <Divider w="25%" h="2px" my="20px" bgColor="#ff9408" />
      </Container>

      {/* Content */}
      <Container
        h="80vh"
        w="100%"
        justifyContent="flex-start"
        alignItems="center"
        bgColor="white"
        pt="60px"
      >
        <HStack w="30%">
          {btnData?.map((button) => {
            const { id, title } = button;
            return (
              <Button
                key={id}
                onPress={() => setValue(id)}
                _hover={{
                  bgColor: "orange.500",
                  borderColor: "orange.500",
                  _text: {
                    color: "white",
                  },
                }}
                variant="outline"
                borderRadius="none"
                colorScheme="gray"
                textTransform="uppercase"
                w="33%"
              >
                {title}
              </Button>
            );
          })}
        </HStack>

        <HStack
          w="100%"
          justifyContent="space-evenly"
          alignItems="center"
          height="80%"
        >
          <Box h="80%" w="45%">
            <Center
              justifyContent="center"
              alignItems="flex-start"
              w="100%"
              h="100%"
            >
              <Image
                resizeMode="cover"
                source={{ uri: aboutimage1 }}
                alt="Alternate Text"
                width="80%"
                height="70%"
                zIndex="999"
                borderWidth="2px"
                borderColor="black.500"
              />
              <Image
                position="absolute"
                right="10%"
                top="5%"
                resizeMode="cover"
                source={{ uri: aboutimage2 }}
                alt="Alternate Text"
                width="80%"
                height="70%"
                borderWidth="2px"
                borderColor="black"
              />
            </Center>
          </Box>
          {/* single accordion item */}
          <Accordion data={data} value={value} />
        </HStack>
      </Container>
    </Box>
  );
};
