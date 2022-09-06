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
// import { Accordion } from "./../index";
import { accordionData } from "../../data/accordion";

export const About = () => {
  interface ContentInterface {
    first: string;
    second: string;
  }

  interface AccordionInterface {
    title: string;
    heading: string;
    content: ContentInterface;
  }
  const [data, setData] = useState<AccordionInterface[]>();

  useEffect(() => {
    setData(accordionData);
  }, []);
  console.log(data);
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

      {/* Accordion */}
      <Container
        h="80vh"
        w="100%"
        justifyContent="flex-start"
        alignItems="center"
        bgColor="white"
        pt="60px"
      >
        <HStack w="30%">
          <Button
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
            Mission
          </Button>
          <Button
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
            Vision
          </Button>
          <Button
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
            Sponsors
          </Button>
        </HStack>

        <HStack
          w="100%"
          justifyContent="space-evenly"
          alignItems="center"
          height="80%"
        >
          {/* images */}
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
          <Box p="10px" h="80%" w="55%">
            <Heading
              size="lg"
              fontWeight="400"
              textAlign="left"
              textTransform="uppercase"
            >
              Mission Mission Mission
            </Heading>
            <Heading
              fontWeight="400"
              textAlign="left"
              size="sm"
              textTransform="uppercase"
              color="orange.500"
            >
              subheading subheading subheading subheading
            </Heading>
            <Text color="gray.600" mt="2rem" textAlign="left" fontSize="md">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil,
              officia voluptate veritatis amet voluptatum aliquam et hic earum
              dolores? Fugit esse aliquid dignissimos commodi molestiae.
            </Text>
            <Text color="gray.600" mt="2rem" textAlign="left" fontSize="md">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam,
              sapiente, inventore dolorum autem rerum, optio odio neque impedit
              architecto maiores temporibus deleniti iusto. Aspernatur, porro?
              Fugiat quas, labore nostrum quis temporibus ut eligendi,
              reiciendis error culpa quam optio numquam dolore?
            </Text>
          </Box>
          {/* <Accordion /> */}
        </HStack>
      </Container>
    </Box>
  );
};
