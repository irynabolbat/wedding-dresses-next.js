"use client";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/config";
import Image from "next/image";
import Link from "next/link";

import BurgerIcon from "@/app/assets/icons/burger-menu.svg";
import CloseIcon from "@/app/assets/icons/close-menu.svg";
import FavouriteIcon from "@/app/assets/icons/favourite.svg";
import CartIcon from "@/app/assets/icons/shopping_bag.svg";
import LoginIcon from "@/app/assets/icons/arrow-in-right.svg";
import PersonIcon from "@/app/assets/icons/person-icon.svg";
import Logo from "@/app/assets/images/logo-removebg-preview.png";
import "@/app/styles/Header.scss";

import { CartProduct } from "@/types/CartProduct";
import { Dress } from "@/types/Dress";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const favouriteItems: Dress[] = useSelector(
    (state: RootState) => state.favourites.items
  );

  const cartItems: CartProduct[] | any = useSelector(
    (state: RootState) => state.cart.items
  );

  const [user] = useAuthState(auth);

  return (
    <header className="header">
      <div className="header__logo">
        <Link href="/">
          <Image src={Logo} height={55} alt="Logo" />
        </Link>
      </div>

      <nav
        className={`header__navigation ${
          menuOpen ? "header__navigation__open" : ""
        }`}
      >
        <Link
          href="/catalog"
          className="header__navigation__link"
          onClick={() => setMenuOpen(false)}
        >
          Catalog
        </Link>
        <Link
          href="/popular"
          className="header__navigation__link"
          onClick={() => setMenuOpen(false)}
        >
          Popular dresses
        </Link>
        <Link
          href="/about"
          className="header__navigation__link"
          onClick={() => setMenuOpen(false)}
        >
          About us
        </Link>
        <Link
          href="/contacts"
          className="header__navigation__link"
          onClick={() => setMenuOpen(false)}
        >
          Contacts
        </Link>
      </nav>

      <div className="header__icons">
        <Link href="/favourites" className="header__icon__link">
          <div>
            <Image src={FavouriteIcon} width={25} alt="Favourites" />
            {favouriteItems.length > 0 && (
              <span className="header__icon__link__counter">
                {favouriteItems.length}
              </span>
            )}
          </div>
        </Link>

        <Link href="/cart" className="header__icon__link">
          <div className="header__icon__link__container">
            <Image src={CartIcon} width={25} alt="Cart" />
            {Object.keys(cartItems).length > 0 && (
              <span className="header__icon__link__counter">
                {Object.keys(cartItems).length}
              </span>
            )}
          </div>
        </Link>

        {!user ? (
          <Link href="/login" className="header__icon__link">
            <div>
              <Image src={LoginIcon} width={25} alt="Login" />
            </div>
          </Link>
        ) : (
          <Link
            href="#"
            className="header__icon__link"
            onClick={() => auth.signOut()}
          >
            <div>
              <Image src={PersonIcon} width={25} alt="Login" />
            </div>
          </Link>
        )}
      </div>

      <button className="burger__menu" onClick={() => setMenuOpen(!menuOpen)}>
        <Image
          src={menuOpen ? CloseIcon : BurgerIcon}
          width={20}
          height={20}
          alt="Menu"
        />
      </button>

      {menuOpen && (
        <div className="burger__menu__context">
          <button
            className="burger__menu__close"
            onClick={() => setMenuOpen(false)}
          >
            <Image src={CloseIcon} width={20} height={20} alt="Close" />
          </button>
          <nav className="burger__navigation">
            <Link
              href="/catalog"
              className="burger__navigation__link"
              onClick={() => setMenuOpen(false)}
            >
              Catalog
            </Link>
            <Link
              href="/popular"
              className="burger__navigation__link"
              onClick={() => setMenuOpen(false)}
            >
              Popular dresses
            </Link>
            <Link
              href="/about"
              className="burger__navigation__link"
              onClick={() => setMenuOpen(false)}
            >
              About us
            </Link>
            <Link
              href="/contacts"
              className="burger__navigation__link"
              onClick={() => setMenuOpen(false)}
            >
              Contacts
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
