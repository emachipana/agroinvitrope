import { Swiper, SwiperSlide } from "swiper/react";
import { Section, Image } from "./styles";
import { Autoplay } from "swiper/modules";
import "swiper/css";

function Slider({ images, height, maxHeight, width, maxWidth, Item, borderRadius, isBanner }) {
  return (
    <Section
      isBanner={isBanner}
      borderRadius={borderRadius}
      height={height}
      maxHeight={maxHeight}
      width={width}
      maxWidth={maxWidth}
    >
      <Item />
      <Swiper
        style={{width: "100%"}}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {
          images.map((image, index) => (
            <SwiperSlide
              key={index}
            >
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
