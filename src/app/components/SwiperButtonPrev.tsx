"use client";
import { useState } from "react";
import { useSwiper } from "swiper/react";
import Image from "next/image";

import ArrowLeftIcon from "@/app/assets/icons/arrow-left.svg";
import "@/app/styles/SwiperProducts.scss";

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
