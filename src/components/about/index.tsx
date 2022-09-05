import { Box, Container, Button, Text, HStack, Divider } from "native-base";

export const About = () => {
  return (
    <Box
      w="100vw"
      justifyContent="flex-start"
      alignItems="center"
      bgColor="red.500"
    >
      {/* Info */}
      <Container
        pt="40px"
        h="35%"
        bgColor="white"
        justifyContent="space-around"
        alignItems="center"
      >
        <Text fontSize="3rem" textTransform="uppercase">
          About us
        </Text>
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
        h="600px"
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
          <Box bgColor="red.500" h="80%" w="45%">
            <Box></Box>
          </Box>
          {/* accordion content  */}
          <Box p="10px" h="80%" w="50%">
            <Text
              textAlign="left"
              color="black"
              fontSize="2xl"
              textTransform="uppercase"
            >
              Mission Mission Mission Mission
            </Text>
            <Text
              textAlign="left"
              fontSize="md"
              textTransform="uppercase"
              color="orange.500"
            >
              subheading subheading subheading subheading
            </Text>
            <Text mt="2rem" textAlign="left" fontSize="sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              deserunt quo mollitia in vel illo, quos dolorem nam blanditiis
              dolores a eligendi vero iure explicabo?
            </Text>
            <Text mt="1rem" textAlign="left" fontSize="sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              sint fugiat fuga error! Tempore, consequatur?
            </Text>
          </Box>
        </HStack>
      </Container>
    </Box>
  );
};
