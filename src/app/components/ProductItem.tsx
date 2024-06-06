"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Dress } from "@/types/Dress";
import FavouriteIcon from "@/app/assets/icons/favourite.svg";
import FavouriteIconFull from "@/app/assets/icons/favourite-full.svg";
import { useDispatch } from "react-redux";
import { add } from "@/store/slices/favouritesSlice";
import "@/app/styles/ProductItem.scss";

type ProductItemProps = {
  dress: Dress;
  className?: string;
  baseUrl?: string;
};

export default function ProductItem({
  dress,
  className,
  baseUrl,
}: ProductItemProps) {
  const dispatch = useDispatch();
  const [isHovered, setIsHovered] = useState(false);

  const handleFavourite = () => {
    dispatch(add(dress));
  };

  return (
    <li className={`product__item ${className}`}>
      <Link href={`/${baseUrl}/${dress.id}`}>
        <div
          className="product__favIcon"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Image
            src={isHovered ? FavouriteIconFull : FavouriteIcon}
            height={30}
            alt="Logo"
            onClick={handleFavourite}
          />
        </div>
        <div className="product__images">
          <Image
            src={dress.image_url_1}
            width={400}
            height={600}
            alt={dress.title}
            className="product__image"
          />
          <div className="product__hover__image">
            <Image
              src={dress.image_url_2}
              width={400}
              height={600}
              alt={dress.title}
              className="product__image"
            />
          </div>
        </div>
        <span className="product__title">
          <span className="product__name">{dress.title}</span>
        </span>
      </Link>
    </li>
  );
}
