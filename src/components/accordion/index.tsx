import { Box, Heading, Text } from "native-base";
interface Props {
  data: AccordionInterface[];
  value: number;
}
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

export const Accordion = (props: Props) => {
  return (
    <Box p="10px" h="80%" w="55%" key={props.data?.[props.value]?.id}>
      <Heading
        size="lg"
        fontWeight="400"
        textAlign="left"
        textTransform="uppercase"
      >
        {props.data?.[props.value]?.title}
      </Heading>
      <Heading
        fontWeight="400"
        textAlign="left"
        size="sm"
        textTransform="uppercase"
        color="orange.500"
      >
        {props.data?.[props.value]?.heading}
      </Heading>
      <Text color="gray.600" mt="2rem" textAlign="left" fontSize="md">
        {props.data?.[props.value]?.content?.first}
      </Text>
      <Text color="gray.600" mt="2rem" textAlign="left" fontSize="md">
        {props.data?.[props.value]?.content?.second}
      </Text>
    </Box>
  );
};
