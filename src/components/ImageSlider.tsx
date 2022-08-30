import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, EffectFade } from "swiper";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "../index.css";
//nativebase
import { Box, Image } from "native-base";
import { banner_bg } from "../assets";

const ImageSlider = () => {
  return (
    <Swiper
      style={{ height: "400px", width: "80%" }}
      modules={[Navigation, EffectFade]}
      navigation
      effect={"fade"}
      speed={800}
      slidesPerView={1}
      loop
    >
      <SwiperSlide>
        <Image
          source={{ uri: banner_bg }}
          position="absolute"
          alt="Alternate Text"
          width="100%"
          height="100%"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default ImageSlider;
