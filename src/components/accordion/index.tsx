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
    <Box
      p={["0px", "10px", "10px", "10px"]}
      h="80%"
      w={["100%", "100%", "55%", "55%"]}
      key={props.data?.[props.value]?.id}
    >
      <Heading
        size={["sm", "md", "md", "lg"]}
        fontWeight={["600", "600", "400", "400"]}
        textAlign="left"
        textTransform="uppercase"
      >
        {props.data?.[props.value]?.title}
      </Heading>
      <Heading
        size={["xs", "sm", "md", "md"]}
        fontWeight={["600", "400", "400", "400"]}
        textAlign="left"
        textTransform="uppercase"
        color="orange.500"
      >
        {props.data?.[props.value]?.heading}
      </Heading>
      <Text
        color="gray.600"
        mt={["1rem", "2rem", "1rem", "2rem"]}
        textAlign="left"
        fontSize={["sm", "md", "xs", "md"]}
      >
        {props.data?.[props.value]?.content?.first}
      </Text>
      <Text
        pb="20px"
        color="gray.600"
        mt={["1rem", "2rem", "1rem", "2rem"]}
        textAlign="left"
        fontSize={["sm", "md", "xs", "md"]}
      >
        {props.data?.[props.value]?.content?.second}
      </Text>
    </Box>
  );
};
