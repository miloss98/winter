import { Box, Heading, Text } from "native-base";
export const Accordion = () => {
  return (
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
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, officia
        voluptate veritatis amet voluptatum aliquam et hic earum dolores? Fugit
        esse aliquid dignissimos commodi molestiae.
      </Text>
      <Text color="gray.600" mt="2rem" textAlign="left" fontSize="md">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam,
        sapiente, inventore dolorum autem rerum, optio odio neque impedit
        architecto maiores temporibus deleniti iusto. Aspernatur, porro? Fugiat
        quas, labore nostrum quis temporibus ut eligendi, reiciendis error culpa
        quam optio numquam dolore?
     
      </Text>
    </Box>
  );
};
