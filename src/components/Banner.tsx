import { banner_bg } from "../assets/index";
import {
  Center,
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
        justifyContent="center"
        alignItems="center"
        bg="red.500"
        mt="120px"
      >
        <HStack width="25%" mr="40px">
          <VStack width="100%" height="100%">
            <Text>
              Winter is often defined by meteorologists to be the three calendar
              months with the lowest average temperatures. This corresponds to
              the months of December, January and February in the Northern
              Hemisphere, and June, July and August in the Southern Hemisphere.
            </Text>
            <Button> Read more</Button>
          </VStack>
        </HStack>
        <HStack width="65%">
          <VStack width="100%" height="100%">
            <ImageSlider />
          </VStack>
        </HStack>
      </Container>
    </Box>
  );
};

export default Banner;
