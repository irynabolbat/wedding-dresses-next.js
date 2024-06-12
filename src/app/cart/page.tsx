"use client";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Image from "next/image";
import Link from "next/link";
import { clear, decrement, increment, remove } from "@/store/slices/cartSlice";
import { RootState } from "@/store/store";

import TrashIcon from "@/app/assets/icons/trash.svg";
import { CartProduct } from "@/types/CartProduct";
import PageTitle from "@/app/components/PageTitle";
import { SubmitModal } from "../components/Modals/SubmitModal";

export default function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const totalPrice = useSelector((state: RootState) => state.cart.totalPrice);
  const [isShowModal, setIsShowModal] = useState(false);

  const removeFromCart = (dress: CartProduct) => {
    const dressId = `${dress.id}_${dress.size}`;
    dispatch(remove(dressId));
    toast.success(`${dress.title} has been removed from cart`);
  };

  const submitOrder = () => {
    setIsShowModal(true);
  };

  const closeModal = () => {
    setIsShowModal(false);
  };

  const handleClearCart = () => {
    dispatch(clear());
    toast.success("The cart has been cleared");
  };

  const decreaseQuantity = (dress: CartProduct) => {
    if (dress.count > 1) {
      const dressId = `${dress.id}_${dress.size}`;
      dispatch(decrement(dressId));
    }
  };

  const increaseQuantity = (dress: CartProduct) => {
    const dressId = `${dress.id}_${dress.size}`;
    dispatch(increment(dressId));
  };

  return (
    <div className="cart">
      <PageTitle title="Shopping Cart" />
      <hr />

      {Object.keys(cartItems).length === 0 ? (
        <p className="cart__emptyMessage">Your cart is empty</p>
      ) : (
        <>
          <button
            className="cart__clearCartButton"
            onClick={handleClearCart}
          >
            Clear Cart
            <Image
              src={TrashIcon}
              width={20}
              height={20}
              alt="Remove"
            />
          </button>

          <ul className="cart__itemsList">
            {Object.values(cartItems).map((item: CartProduct | any) => (
              <li
                key={item.id}
                className="cart__item"
              >
                <div className="cart__item__container">
                  <Link href={`/catalog/${item.id}`}>
                    <Image
                      src={item.image_url_1}
                      width={100}
                      height={120}
                      alt={item.title}
                      className="cart__item__image"
                    />
                  </Link>
                  <div className="cart__item__details">
                    <h3 className="cart__item__title">{item.title}</h3>
                    <p className="cart__item__size">Size: {item.size}</p>
                    <p className="cart__item__price">
                      Price: € {item.price.toLocaleString()}.00 EUR
                    </p>
                  </div>

                  <div className="cart__item__quantity">
                    <button
                      className="cart__item__quantity--operation"
                      onClick={() => decreaseQuantity(item)}
                    >
                      -
                    </button>
                    <span className="cart__item__quantity--number">
                      {item.count}
                    </span>
                    <button
                      className="cart__item__quantity--operation"
                      onClick={() => increaseQuantity(item)}
                    >
                      +
                    </button>
                  </div>

                  <button
                    className="cart__removeButton"
                    onClick={() => removeFromCart(item)}
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
          <p className="cart__total">
            Total: € {totalPrice.toLocaleString()}.00 EUR
          </p>

          <button
            className="cart__submitOrderButton"
            onClick={submitOrder}
          >
            Submit Order
          </button>
        </>
      )}
      {isShowModal && (
        <SubmitModal
          closeModal={closeModal}
          cleanCart={() => dispatch(clear())}
        />
      )}
    </div>
  );
}
