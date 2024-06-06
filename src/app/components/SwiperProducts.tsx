"use client";
import { Dress } from "@/types/Dress";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { SwiperButtonNext } from "./SwiperButtonNext";
import { SwiperButtonPrev } from "./SwiperButtonPrev";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ProductItem from "./ProductItem";
import "@/app/styles/SwiperProducts.scss";
import PageTitle from "./PageTitle";

interface CarouselProps {
  popularDresses: Dress[];
}

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
            768: {
              slidesPerView: 3,
              slidesPerGroup: 3,
            },
            1020: {
              slidesPerView: 4,
              slidesPerGroup: 4,
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
