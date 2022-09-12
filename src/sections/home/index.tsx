import {
  Image,
  Box,
  Text,
  Container,
  HStack,
  VStack,
  Button,
  Heading,
  Link,
} from "native-base";
import { banner_bg } from "../../assets/index";
import { ImageSlider } from "../../components/index";

export const Home = () => {
  return (
    <Box
      nativeID="home"
      width="100%"
      height="100%"
      justifyContent="flex-start"
      alignItems="center"
    >
      <Image
        resizeMode="cover"
        source={{ uri: banner_bg }}
        position="absolute"
        alt="Alternate Text"
        width="100%"
        height="100%"
      />
      <Container
        height={["100vh", "80vh", "80vh"]}
        width={["100vw", "100vw", "80vw"]}
        flexDirection={["column", "row", "row"]}
        justifyContent={["space-evenly", "space-evenly", "space-evenly"]}
        alignItems="center"
        mt={["50px", "50px", "120px"]}
      >
        <HStack
          width={["100%", "40%", "50%", "32%"]}
          height={["45%", "50%", "60%", "80%"]}
        >
          <VStack
            width="100%"
            height="100%"
            justifyContent="center"
            alignItems="left"
          >
            <Box width="100%">
              <Heading
                textTransform="uppercase"
                fontWeight="extrabold"
                color="white"
                fontSize={["xl", "lg", "2xl", "3xl"]}
              >
                Winter
              </Heading>
              <Heading
                textTransform="uppercase"
                color="orange.500"
                fontSize={["lg", "sm", "xl", "2xl"]}
                fontWeight="extrabold"
              >
                The coldest season
              </Heading>
            </Box>
            <Text
              italic
              fontWeight={["bold", "normal", "normal"]}
              fontSize={["sm", "sm", "md", "lg"]}
              color="white"
              py={["15px", "10px", "10px", "20px"]}
            >
              Winter is often defined by meteorologists to be the three calendar
              months with the lowest average temperatures. This corresponds to
              the months of December, January and February in the Northern
              Hemisphere, and June, July and August in the Southern Hemisphere.
            </Text>

            <Button
              width={["100%", "80%", "50%"]}
              variant="outline"
              borderRadius="none"
              mb={["5px", "2px", "5px", "5px"]}
              size={["sm", "sm", "md", "lg"]}
              _hover={{
                bgColor: "orange.500",
                borderColor: "orange.500",
              }}
            >
              <Link
                isExternal
                fontSize={["md", "sm", "md", "lg"]}
                isUnderlined={false}
                _text={{ color: "white" }}
                href="https://en.wikipedia.org/wiki/Winter"
              >
                Read more
              </Link>
            </Button>
          </VStack>
        </HStack>
        <HStack width={["100%", "75%", "60%"]} height={["45%", "60%", "80%"]}>
          <VStack width="100%" height="100%">
            <ImageSlider />
          </VStack>
        </HStack>
      </Container>
    </Box>
  );
};
