import { banner_bg } from "../assets/index";
import {
  Image,
  Box,
  Text,
  Container,
  HStack,
  VStack,
  Button,
} from "native-base";
import ImageSlider from "./ImageSlider";

const Banner = () => {
  return (
    <Box
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
        mt={["15px", "50px", "120px"]}
      >
        <HStack width={["100%", "40%", "32%"]} height={["45%", "60%", "80%"]}>
          <VStack
            width="100%"
            height="100%"
            justifyContent="center"
            alignItems="left"
          >
            <Box width="100%">
              <Text
                textTransform="uppercase"
                fontWeight="extrabold"
                color="white"
                fontSize={["xl", "2xl", "3xl"]}
              >
                Winter
              </Text>
              <Text
                textTransform="uppercase"
                color="orange.500"
                fontSize={["lg", "lg", "3xl"]}
                fontWeight="extrabold"
              >
                The coldest season
              </Text>
            </Box>
            <Text
              italic
              fontWeight={["bold", "normal", "normal"]}
              fontSize={["sm", "md", "xl"]}
              color="white"
              py={["15px", "15px", "20px"]}
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
              size={["sm", "md", "lg"]}
              _text={{ color: "white", fontSize: "md" }}
              _hover={{
                bgColor: "orange.500",
                borderColor: "orange.500",
              }}
            >
              Read more
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

export default Banner;
