"use client";
import { useState } from "react";
import { useSwiper } from "swiper/react";
import Image from "next/image";
import ArrowRightIcon from "@/app/assets/icons/arrow-right.svg";
import "@/app/styles/SwiperProducts.scss";

export const SwiperButtonNext = () => {
  const swiper = useSwiper();
  const [isDisable, setIsDisable] = useState(false);

  swiper.on("activeIndexChange", () => {
    setIsDisable(swiper.isEnd);
  });

  const goNext = () => {
    swiper.slideNext();
  };

  return (
    <button
      className={`swiperButton, {
        disabled: ${isDisable},
      }`}
      onClick={goNext}
    >
      <Image
        src={ArrowRightIcon}
        width={50}
        height={50}
        alt="Arrow_icon"
      />
    </button>
  );
};
