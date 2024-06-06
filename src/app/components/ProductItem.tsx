"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Dress } from "@/types/Dress";
import FavouriteIcon from "@/app/assets/icons/favourite.svg";
import FavouriteIconFull from "@/app/assets/icons/favourite-full.svg";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "@/store/slices/favouritesSlice";
import "@/app/styles/ProductItem.scss";
import { toast } from "react-toastify";
import { RootState } from "@/store/store";

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
  const favourites = useSelector((state: RootState) => state.favourites.items);
  const [isHovered, setIsHovered] = useState(false);
  const [isFavourite, setIsFavourite] = useState(false);

  useEffect(() => {
    const favouriteItem = favourites.find(
      (item: Dress) => item.id === dress.id
    );
    setIsFavourite(!!favouriteItem);
  }, [favourites, dress.id]);

  const handleFavourite = () => {
    if (isFavourite) {
      dispatch(remove(dress.id));
      toast.success(`${dress.title} has been removed from the favourites`);
    } else {
      dispatch(add(dress));
      toast.success(`${dress.title} has been added to the favourites`);
    }
    setIsFavourite(!isFavourite);
  };

  return (
    <li className={`product__item ${className}`}>
      <div
        className="product__favIcon"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image
          src={isFavourite || isHovered ? FavouriteIconFull : FavouriteIcon}
          height={30}
          alt="Logo"
          onClick={handleFavourite}
        />
      </div>

      <Link href={`/${baseUrl}/${dress.id}`}>
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
