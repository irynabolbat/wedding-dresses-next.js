"use client";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCollectionAsync } from "@/store/slices/collectionSlice";
import { AppDispatch, RootState } from "@/store/store";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import ArrowIcon from "@/app/assets/icons/chevron-right.svg";
import "@/app/styles/Breadcrumbs.scss";
import { Dress } from "@/types/Dress";
import cn from "classnames";

export const Breadcrumbs = () => {
  const [dressTitle, setDressTitle] = useState<string>("");

  const dispatch = useDispatch<AppDispatch>();
  const collection = useSelector((state: RootState) => state.collection.value);

  useEffect(() => {
    dispatch(fetchCollectionAsync());
  }, [dispatch]);

  const path = usePathname().split("/");

  const breadcrumbPages = [
    "catalog",
    "popular",
    "about",
    "contacts",
    "favourites",
    "cart",
  ];

  const pagePath = path[1]?.toLowerCase();
  const pageLink = `/${pagePath}`;

  useEffect(() => {
    if (path.length > 2) {
      const productId = path[2];
      const curDress = collection.find(
        (dress: Dress) => dress.id === productId
      );
      if (curDress) {
        setDressTitle(curDress.title);
      }
    }
  }, [path, collection]);

  if (
    (path.length === 2 && path[1] === "") ||
    !breadcrumbPages.includes(pagePath)
  ) {
    return null;
  }

  return (
    <div className="breadcrumbs">
      <Link href="/" className="breadcrumbs__link">
        Home
      </Link>
      <Image
        src={ArrowIcon}
        height={16}
        width={16}
        alt="Arrow icon"
        className="breadcrumbs__arrow"
      />
      <Link
        href={pageLink}
        className={cn("breadcrumbs__link", {
          breadcrumbs__last_point: path.length <= 2,
        })}
      >
        {pagePath.charAt(0).toUpperCase() + pagePath.slice(1)}
      </Link>

      {path.length > 2 && (
        <>
          <Image
            src={ArrowIcon}
            height={16}
            width={16}
            alt="Arrow icon"
            className="breadcrumbs__arrow"
          />
          <div className="breadcrumbs__last_point">{dressTitle}</div>
        </>
      )}
    </div>
  );
};
