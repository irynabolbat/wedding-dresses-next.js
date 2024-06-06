"use client";
import { useSwiper } from "swiper/react";
import { useState } from "react";
import "@/app/styles/SwiperProducts.scss";
import ArrowLeftIcon from "@/app/assets/icons/arrow-left.svg";
import Image from "next/image";

export const SwiperButtonPrev = () => {
  const swiper = useSwiper();
  const [isDisable, setIsDisable] = useState(swiper.isBeginning);

  swiper.on("activeIndexChange", () => {
    setIsDisable(swiper.isBeginning);
  });

  const goPrev = () => {
    swiper.slidePrev();
  };

  return (
    <button
      className={`swiperButton, {
        disabled: ${isDisable},
      }`}
      onClick={goPrev}
    >
      <Image
        src={ArrowLeftIcon}
        width={50}
        height={50}
        alt="Arrow_icon"
      />
    </button>
  );
};
