import { banner_bg } from "../assets/index";
import { Center, Image } from "native-base";

const Banner = () => {
  return (
    <Image
      source={{ uri: banner_bg }}
      alt="Alternate Text"
      width="100%"
      height="80%"
    />
  );
};

export default Banner;
