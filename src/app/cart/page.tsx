"use client";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import Image from "next/image";
import { clear, remove } from "@/store/slices/cartSlice";
import { CartProduct } from "@/types/CartProduct";
import PageTitle from "../components/PageTitle";
import Link from "next/link";
import TrashIcon from "@/app/assets/icons/trash.svg";

export default function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const totalPrice = useSelector((state: RootState) => state.cart.totalPrice);

  const removeFromCart = (productId: string) => {
    dispatch(remove(productId));
  };

  const submitOrder = () => {
    alert("Thanks for order");
  };

  const handleClearCart = () => {
    dispatch(clear());
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
            {Object.values(cartItems).map((item: CartProduct) => (
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

                  <button
                    className="cart__removeButton"
                    onClick={() => removeFromCart(item.id)}
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
    </div>
  );
}
