"use client";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "@/app/styles/SwiperProducts.scss";
import { Dress } from "@/types/Dress";
import PageTitle from "./PageTitle";
import ProductItem from "./ProductItem";
import { SwiperButtonNext } from "./SwiperButtonNext";
import { SwiperButtonPrev } from "./SwiperButtonPrev";

type CarouselProps = {
  popularDresses: Dress[];
};

export default function SwiperProducts({ popularDresses }: CarouselProps) {
  return (
    <div className="swiperProducts">
      <PageTitle title="Popular dresses" />
      <div>
        <Swiper
          className="swiperProducts__content"
          modules={[Navigation]}
          spaceBetween={1}
          slidesPerGroup={1}
          slidesPerView={1}
          breakpoints={{
            480: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              allowTouchMove: true,
              speed: 400,
            },
            668: {
              slidesPerView: 3,
              slidesPerGroup: 3,
            },
            968: {
              slidesPerView: 4,
              slidesPerGroup: 4,
            },
            1450: {
              slidesPerView: 5,
              slidesPerGroup: 5,
              speed: 700,
              allowTouchMove: false,
            },
          }}
        >
          <div className="swiperProducts__buttons">
            <SwiperButtonPrev />
            <SwiperButtonNext />
          </div>

          {popularDresses.map((item) => (
            <SwiperSlide key={item.id}>
              <ProductItem
                dress={item}
                className="swiperProducts__item"
                baseUrl="popular"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
