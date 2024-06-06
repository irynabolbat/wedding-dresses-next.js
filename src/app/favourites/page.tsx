"use client";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import Image from "next/image";
import { remove } from "@/store/slices/favouritesSlice";
import { Dress } from "@/types/Dress";
import PageTitle from "../components/PageTitle";
import Link from "next/link";
import { Tooltip } from "react-tooltip";
import TrashIcon from "@/app/assets/icons/trash.svg";
import { toast } from "react-toastify";

export default function Favourites() {
  const dispatch = useDispatch();
  const favourites = useSelector((state: RootState) => state.favourites.items);

  const handleRemove = (item: Dress) => {
    dispatch(remove(item.id));
    toast.success(`${item.title} has been removed from favourites`);
  };

  return (
    <div className="favourites">
      <PageTitle title="Favourites" />
      <hr />

      {favourites.length === 0 ? (
        <p className="favourites__emptyMessage">You have no favourite items.</p>
      ) : (
        <ul className="favourites__itemsList">
          {favourites.map((item: Dress) => (
            <li
              key={item.id}
              className="favourites__item"
            >
              <div className="favourites__item__container">
                <Link href={`/catalog/${item.id}`}>
                  <Image
                    src={item.image_url_1}
                    width={100}
                    height={120}
                    alt={item.title}
                    className="favourites__item__image"
                  />
                </Link>
                <div className="favourites__item__details">
                  <h3 className="favourites__item__title">{item.title}</h3>
                  <p className="favourites__item__price">
                    € {item.price.toFixed(2)}
                  </p>
                </div>

                <Tooltip
                  id="favourites__item__description"
                  className="tooltip"
                />
                <div
                  className="favourites__item__description"
                  data-tooltip-id="favourites__item__description"
                  data-tooltip-content={item.description}
                >
                  {`${item.description.slice(0, 150)}...`}
                </div>

                <button
                  className="favourites__removeButton"
                  onClick={() => handleRemove(item)}
                >
                  <Image
                    src={TrashIcon}
                    width={20}
                    height={20}
                    alt="Remove"
                  />
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
