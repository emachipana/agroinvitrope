import { Swiper, SwiperSlide } from "swiper/react";
import { Section, Image } from "./styles";
import { Autoplay } from "swiper/modules";
import "swiper/css";

function Slider({ images, height, maxHeight, width, Item, borderRadius, isBanner }) {
  return (
    <Section
      isBanner={isBanner}
      borderRadius={borderRadius}
      height={height}
      maxHeight={maxHeight}
      width={width}
    >
      <Item />
      <Swiper
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {
          images.map(image => (
            <SwiperSlide>
              <Image 
                alt={image.alt}
                src={`assets/photo/${image.src}`}
              />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </Section>
  );
}

export default Slider;
