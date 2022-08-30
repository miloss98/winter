import { banner_bg } from "../assets/index";
import { Box, Center, Image } from "native-base";

const Banner = () => {
  return (
    <Center w="100vw">
      <Image
        source={{ uri: banner_bg }}
        alt="Alternate Text"
        width="100%"
        height="80vh"
      />
    </Center>
  );
};

export default Banner;
