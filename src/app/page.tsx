"use client";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCollectionAsync } from "@/store/slices/collectionSlice";
import { AppDispatch, RootState } from "@/store/store";
import cn from "classnames";
import Image from "next/image";
import Link from "next/link";

import FavouriteIcon from "@/app/assets/icons/favourite.svg";
import product1 from "@/app/assets/images/productMainPage1.jpg";
import product2 from "@/app/assets/images/productMainPage2.png";
import product3 from "@/app/assets/images/productMainPage3.png";
import { Dress } from "@/types/Dress";

import AboutUsShort from "./components/AboutUsShort";
import ButtonNextPage from "./components/ButtonNextPage";
import SwiperProducts from "./components/SwiperProducts";

const images = [product1, product2, product3];

export default function Home() {
  const dispatch = useDispatch<AppDispatch>();
  const collection = useSelector((state: RootState) => state.collection.value);
  const sortedDresses = collection
    ? [...collection]
        .sort((a: Dress, b: Dress) => b.price - a.price)
        .slice(0, 30)
    : [];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  useEffect(() => {
    dispatch(fetchCollectionAsync());
  }, [dispatch]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 0);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home">
      <div className="home_header">
        <div className="home_header_images">
          {images.map((image, index) => (
            <Image
              key={index}
              src={image}
              width={400}
              height={600}
              alt="Bride's Charm"
              className={cn("image", {
                visible: index === currentImageIndex,
              })}
            />
          ))}
        </div>

        <div className="home_header_text">
          <h1 className="home_header_text--mainText">BRIDE'S CHARM</h1>
          <p className="home_header_text--subText">
            the best for you
            <Image
              src={FavouriteIcon}
              width={20}
              height={20}
              alt="Logo"
            />
          </p>
          <div className="home_header_text--buttonWrapper">
            <Link
              href="/catalog"
              className="home_header_text--buttonWrapper--button"
            >
              Go catalog
            </Link>
          </div>
        </div>
      </div>

      <SwiperProducts popularDresses={sortedDresses} />

      <ButtonNextPage
        btnText={"See more"}
        btnHref={"/popular"}
      />

      <AboutUsShort />
    </div>
  );
}
