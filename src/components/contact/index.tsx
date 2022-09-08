import { Container, Box, Image, Text, Heading } from "native-base";
import { DividerLine, Form, Info } from "../index";
import { contact_bgr } from "../../assets";

export const Contact = () => {
  return (
    <div id="contact">
      <Box w="100%" justifyContent="flex-start" alignItems="center">
        <Image
          resizeMode="cover"
          source={{ uri: contact_bgr }}
          position="absolute"
          alt="Alternate Text"
          width="100%"
          height="100%"
        />
        <Container
          pt={["50px", "40px", "40px"]}
          h="35%"
          justifyContent="space-around"
          alignItems="center"
        >
          <Heading
            pb="1rem"
            fontWeight="500"
            fontSize={["2rem", "2rem", "2.2rem", "3rem"]}
            textTransform="uppercase"
            color="white"
          >
            Contact us
          </Heading>
          <Text
            width={["100%", "100%", "80%", "80%"]}
            fontSize={["xs", "sm", "sm", "md"]}
            textAlign="center"
            color="white"
          >
            Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum
            fermentum nunc. Etiam pharetra, erat sed fermentum feugiat velit
            mauris egestas quamut aliquam massa nisl quis neque. Suspendisse in
            orci enim.
          </Text>
          <DividerLine />
        </Container>

        <Container
          w={["100%", "100%"]}
          alignItems="center"
          justifyContent="space-evenly"
          flexDirection="column"
        >
          <Form />
          <Info />
        </Container>
      </Box>
    </div>
  );
};
