import {
  Box,
  Container,
  Button,
  Text,
  HStack,
  Heading,
  Center,
  Image,
} from "native-base";
import { useState, useEffect } from "react";
import { aboutimage1, aboutimage2 } from "../../assets/index";
import { Accordion, DividerLine } from "../../components/index";
import { accordionsData, buttonsData } from "../../data/index";

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

export const About = () => {
  const [data, setData] = useState<AccordionInterface[]>([]);
  const [btnData, setBtnData] = useState<ButtonInterface[]>();
  const [value, setValue] = useState<number>(0);

  useEffect(() => {
    setData(accordionsData);
    setBtnData(buttonsData);
  }, []);

  return (
    <div id="about">
      <Box
        mt="50px"
        mb={["300px", "0px", "0px", "0px"]}
        w="100vw"
        justifyContent="flex-start"
        alignItems="center"
        bgColor="white"
      >
        {/* Info */}
        <Container
          pt={["50px", "40px", "40px"]}
          h="35%"
          bgColor="white"
          justifyContent="space-around"
          alignItems="center"
        >
          <Heading
            pb="1rem"
            fontWeight="500"
            fontSize={["2rem", "2rem", "2.2rem", "3rem"]}
            textTransform="uppercase"
          >
            About us
          </Heading>
          <Text
            width={["100%", "100%", "80%", "80%"]}
            fontSize={["xs", "sm", "sm", "md"]}
            textAlign="center"
          >
            Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat
            ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh
            vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam
            nec tellus a odio tincidunt auctor a ornare odio.
          </Text>
          <DividerLine />
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
          <HStack w={["100%", "60%", "60%", "40%"]}>
            {btnData?.map((button) => {
              const { id, title } = button;
              return (
                <Button
                  key={id}
                  onPress={() => {
                    setValue(id);
                  }}
                  size={["sm", "sm", "md", "lg"]}
                  _hover={{
                    bgColor: "orange.400",
                    borderColor: "orange.400",
                    _text: {
                      color: "white",
                    },
                  }}
                  _focus={{
                    _text: {
                      color: "white",
                    },
                    _hover: {
                      bgColor: "orange.500",
                    },
                    bgColor: "orange.500",
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
            mt={["150px", "130px", "0px", "0px"]}
            w="100%"
            display="flex"
            flexDirection={["column", "column", "row", "row"]}
            justifyContent="space-evenly"
            alignItems="center"
            height="80%"
          >
            <Box h="80%" w={["90%", "80%", "60%", "45%"]}>
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
                  width={["100%", "80%", "80%", "80%"]}
                  height="70%"
                  zIndex="999"
                  borderWidth="2px"
                  borderColor="black.500"
                />
                <Image
                  position="absolute"
                  right={["-10%", "10%", "10%"]}
                  top="5%"
                  resizeMode="cover"
                  source={{ uri: aboutimage2 }}
                  alt="Alternate Text"
                  width={["100%", "80%", "80%", "80%"]}
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
    </div>
  );
};
