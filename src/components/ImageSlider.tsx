//swiper library
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, EffectFade } from "swiper";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "../index.css";
//nativebase
import { Image } from "native-base";
import { sliderimage1, sliderimage2 } from "../assets";

const ImageSlider = () => {
  return (
    <Swiper
      style={{ height: "100%", width: "100%" }}
      modules={[Navigation, EffectFade]}
      navigation
      effect={"fade"}
      speed={800}
      slidesPerView={1}
      loop
    >
      <SwiperSlide>
        <Image
          source={{ uri: sliderimage1 }}
          position="absolute"
          alt="Alternate Text"
          width="100%"
          height="100%"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          source={{ uri: sliderimage2 }}
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
