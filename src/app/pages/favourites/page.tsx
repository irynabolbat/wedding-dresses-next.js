"use client";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Tooltip } from "react-tooltip";
import { RootState } from "@/store/store";
import { remove } from "@/store/slices/favouritesSlice";
import { add } from "@/store/slices/cartSlice";
import Image from "next/image";
import Link from "next/link";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/config";

import CartIcon from "@/app/assets/icons/shopping_bag.svg";
import TrashIcon from "@/app/assets/icons/trash.svg";
import { Dress } from "@/types/Dress";
import { CartProduct } from "@/types/CartProduct";
import PageTitle from "../../components/PageTitle";
import SizeModal from "../../components/Modals/SizeModal";

export default function Favourites() {
  const [user] = useAuthState(auth);
  const dispatch = useDispatch();
  const favourites = useSelector((state: RootState) => state.favourites.items);
  const [curSize, setCurSize] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<Dress | null>(null);

  const handleRemove = (item: Dress) => {
    dispatch(remove(item.id));
    toast(`${item.title} has been removed from favourites`);
  };

  const handleChooseSize = (size: string) => {
    setCurSize(size);
  };

  const handleAddToCart = (item: Dress) => {
    if (curSize) {
      const productToAdd: CartProduct = {
        id: `${item.id}_${curSize}`,
        title: item.title,
        price: item.price,
        description: item.description,
        images: item.images,
        size: curSize,
        count: 1,
      };

      dispatch(add(productToAdd));
      setCurSize(null);
      toast(`🛍️ ${item.title} has been added to the cart`);
    }
  };

  const handleAddAndClose = () => {
    if (selectedItem) {
      handleAddToCart(selectedItem);
      setSelectedItem(null);
    }
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
            <li key={item.id} className="favourites__item">
              <div className="favourites__item__container">
                <Link href={`/catalog/${item.id}`}>
                  {item.images && (
                    <Image
                      src={item.images[0]}
                      width={100}
                      height={120}
                      alt={item.title}
                      className="favourites__item__image"
                    />
                  )}
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

                <div className="favourites__buttons">
                  <button
                    className="favourites__btn"
                    onClick={() => handleRemove(item)}
                  >
                    <Image
                      src={TrashIcon}
                      width={20}
                      height={20}
                      alt="Remove"
                    />
                  </button>

                  <button
                    className="favourites__btn"
                    onClick={() => setSelectedItem(item)}
                  >
                    <Image src={CartIcon} width={20} height={20} alt="Cart" />
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}

      {selectedItem && (
        <SizeModal
          dress={selectedItem}
          sizes={selectedItem.sizes}
          curSize={curSize}
          onClose={() => setSelectedItem(null)}
          onAddToCart={handleAddAndClose}
          onSelectSize={handleChooseSize}
        />
      )}
    </div>
  );
}
