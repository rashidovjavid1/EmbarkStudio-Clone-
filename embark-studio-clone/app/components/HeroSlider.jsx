"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const HeroSlider = ({ items }) => {
  return (
    <div className="newsSliderWrapper">
      <Swiper
        modules={[Navigation]}
        spaceBetween={40}
        slidesPerView={4}
        slidesPerGroup={1}
        loop={false}
        grabCursor={true}
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="newsSectionCard">
              <div className="newsSectionCardImage">
                <img src={item.image} alt={item.label} />
              </div>

              <div className="newsSectionBottom">
                <a href="#">
                  <h3>{item.label}</h3>
                </a>

                <a href="#">
                  <p>{item.description}</p>
                  {item.tag && (
                    <div className="tag">
                      <span>{item.tag}</span>
                    </div>
                  )}
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="custom-prev">‹</div>
      <div className="custom-next">›</div>
    </div>
  );
};

export default HeroSlider;
