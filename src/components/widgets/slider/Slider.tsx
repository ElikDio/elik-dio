import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useRef } from 'react';
import './Slider.scss';

interface SliderProps {
  elements: JSX.Element[];
}

export const Slider: React.FC<SliderProps> = ({ elements }) => {
  const swiperRef = useRef<any>(null);

  return (
    <div className={'slider'}>
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        ref={swiperRef}
        modules={[Navigation]}
        slidesPerView={3}
        centeredSlides={true}
        speed={600}
      >
        {elements.map((element, index) => (
          <SwiperSlide
            key={index}
            onClick={() => {
              if (!swiperRef.current) return;

              const swiper = swiperRef.current;
              const { activeIndex, isBeginning, isEnd } = swiper;

              if (index === activeIndex + 1 && !isEnd) {
                swiper.slideNext();
              } else if (index === activeIndex - 1 && !isBeginning) {
                swiper.slidePrev();
              }
            }}
          >
            {element}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
