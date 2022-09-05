import { Box, Container, Button, Text } from "native-base";

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
        <Text textAlign="center">
          Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat
          ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh
          vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam
          nec tellus a odio tincidunt auctor a ornare odio.
        </Text>
        <Box mt="20px" h="2px" backgroundColor="#ff9408" w="25%"></Box>
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
        <Box
          w="30%"
          justifyContent="center"
          alignItems="center"
          flexDirection="row"
        >
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
        </Box>

        <Box
          bgColor="white"
          w="100%"
          flexDirection="row"
          justifyContent="space-evenly"
          alignItems="center"
          height="80%"
        >
          {/* images */}
          <Box bgColor="red.500" h="80%" w="45%">
            <Text textAlign="center">images</Text>
          </Box>
          {/* accordion content  */}
          <Box bgColor="red.500" h="80%" w="45%">
            <Text textAlign="center">paragraph</Text>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
