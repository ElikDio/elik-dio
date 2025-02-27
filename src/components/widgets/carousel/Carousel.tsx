import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useRef } from 'react';
import './Carousel.scss';

interface CarouselProps {
  images: string[];
}

export const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const swiperRef = useRef<any>(null);

  return (
    <div className={'carousel'}>
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        ref={swiperRef}
        modules={[Navigation]}
        slidesPerView={3}
        centeredSlides={true}
        loop={true}
        speed={600}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt={`Slide ${index}`}
              className={'image'}
              onClick={() => {
                if (!swiperRef.current) return;

                const swiper = swiperRef.current;
                const realIndex = swiper.realIndex;

                if (index === (realIndex + 1) % images.length) {
                  swiper.slideNext();
                } else if (
                  index ===
                  (realIndex - 1 + images.length) % images.length
                ) {
                  swiper.slidePrev();
                }
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
