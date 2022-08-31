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
        source={{ uri: banner_bg }}
        position="absolute"
        alt="Alternate Text"
        width="100%"
        height="100%"
      />
      <Container
        height="80vh"
        width="80vw"
        flexDirection="row"
        justifyContent="space-evenly"
        alignItems="center"
        mt="80px"
      >
        <HStack width="32%" height="80%">
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
                fontSize="3xl"
              >
                Winter
              </Text>
              <Text
                textTransform="uppercase"
                color="orange.500"
                fontSize="2xl"
                fontWeight="extrabold"
              >
                The coldest season
              </Text>
            </Box>
            <Text italic fontSize="md" color="white" pt="20px" pb="25px">
              Winter is often defined by meteorologists to be the three calendar
              months with the lowest average temperatures. This corresponds to
              the months of December, January and February in the Northern
              Hemisphere, and June, July and August in the Southern Hemisphere.
            </Text>

            <Button
              width="50%"
              variant="outline"
              borderRadius="none"
              size="md"
              _text={{ color: "white" }}
              _hover={{
                bgColor: "orange.500",
                borderColor: "orange.500",
              }}
            >
              Read more
            </Button>
          </VStack>
        </HStack>
        <HStack width="60%" height="80%">
          <VStack width="100%" height="100%">
            <ImageSlider />
          </VStack>
        </HStack>
      </Container>
    </Box>
  );
};

export default Banner;
