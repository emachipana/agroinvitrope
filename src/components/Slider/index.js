import { Swiper, SwiperSlide } from "swiper/react";
import { Section, Image } from "./styles";
import { Autoplay } from "swiper/modules";
import InfoCard from "../InfoCard";
import "swiper/css";

function Slider() {
  return (
    <Section>
      <InfoCard />
      <Swiper
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        <SwiperSlide>
          <Image alt="image" src="assets/complete_2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <Image alt="image" src="assets/complete_4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <Image alt="image" src="assets/tubo_1.jpg" />
        </SwiperSlide>
      </Swiper>
    </Section>
  );
}

export default Slider;
