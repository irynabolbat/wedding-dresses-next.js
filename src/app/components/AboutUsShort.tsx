"use client";
import Image from "next/image";
import StoreImage from "@/app/assets/images/store.png";
import "@/app/styles/AboutUsShort.scss";
import ButtonNextPage from "./ButtonNextPage";
import PageTitle from "./PageTitle";

export default function AboutUsShort() {
  return (
    <div className="aboutUsShort">
      <PageTitle title="About us" />
      <div className="aboutUsShort__container">
        <div className="aboutUsShort__inner">
          <p className="aboutUsShort__text">
            Designed by Carla Jenkins, Bride's Charm has revolutionised the
            bridal world by creating beautiful and modern dresses for everyday,
            natural beauties. We are known for our daring V necklines and
            plunging low backs as well as our luxurious French crepe dresses...
          </p>
          <ButtonNextPage
            btnText="Read more"
            btnHref="/about"
          />
        </div>
        <Image
          src={StoreImage}
          width={300}
          height={500}
          alt="Bride's Charm Store"
          className="aboutUsShort__image"
        />
      </div>
    </div>
  );
}
