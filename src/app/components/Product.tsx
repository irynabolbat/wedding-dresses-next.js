"use client";
import { add } from "@/store/slices/cartSlice";
import { CartProduct } from "@/types/CartProduct";
import { Dress } from "@/types/Dress";
import Image from "next/image";
import { useState } from "react";
import { useDispatch } from "react-redux";
import '@/app/styles/ProductPage.scss'
import PageTitle from "./PageTitle";
import cn from "classnames";

interface ProductProps {
  product: Dress;
}

export default function ProductPage({ product }: ProductProps) {
  const dispatch = useDispatch();

  const [curSize, setCurSize] = useState<string | null>(null);
  const [currentImage, setCurrentImage] = useState<string>(product.image_url_1);

  const handleChooseSize = (size: string) => {
    setCurSize(size);
  }

  const handleAddToCart = () => {
    if (curSize) {
      const productToAdd: CartProduct = {
        id: product.id,
        title: product.title,
        price: product.price,
        description: product.description,
        image_url_1: product.image_url_1,
        size: curSize,
        count: 1,
      };
  
      dispatch(add(productToAdd));
      setCurSize(null);
    }
  }

  const handleThumbnailClick = (imageUrl: string) => {
    setCurrentImage(imageUrl);
  }

  const handleNextImage = () => {
    const images = [
      product.image_url_1,
      product.image_url_2,
      product.image_url_3,
      product.image_url_4,
      product.image_url_5
    ];
    const currentIndex = images.indexOf(currentImage);
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentImage(images[nextIndex]);
  }

  const handlePreviousImage = () => {
    const images = [
      product.image_url_1,
      product.image_url_2,
      product.image_url_3,
      product.image_url_4,
      product.image_url_5
    ];
    const currentIndex = images.indexOf(currentImage);
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentImage(images[prevIndex]);
  }

  return (
    <div className="product">
      <div className="product__imagesWrapper">
        <div className="product__carousel">
          <button onClick={handlePreviousImage} className="product__carousel__button--left">{"<"}</button>
          <Image
            src={currentImage}
            width={400}
            height={600}
            alt={product.title}
            className="product__image"
          />
          <button onClick={handleNextImage} className="product__carousel__button--right">{">"}</button>
        </div>

        <div className="product__thumbnails">
          {[product.image_url_1, product.image_url_2, product.image_url_3, product.image_url_4, product.image_url_5]
            .filter(imageUrl => imageUrl !== currentImage)
            .map((imageUrl, index) => (
              <div key={index} className="product__thumbnail">
                <Image
                  src={imageUrl}
                  width={80}
                  height={120}
                  alt={`Thumbnail ${index + 1}`}
                  onClick={() => handleThumbnailClick(imageUrl)}
                  className='product__image'
                />
              </div>
          ))}
        </div>
      </div>

      <div className="product__info">
        <PageTitle title={product.title} />
        <h3 className="product__price">
          € {product.price.toLocaleString()}.00 EUR
        </h3>
        <p className="product__description">{product.description}</p>

        <div className="product__chooseSize">
          <p>Choose your size</p>
          <ul className="product__sizesList">
            {product.sizes.map((size: string) => (
              <li
                key={size}
                className="product__size"
              >
                <button
                  onClick={() => handleChooseSize(size)}
                  className={cn('product__size__button', {
                    "product__size__button--selected": size === curSize
                  })}
                >
                  {size}
                </button>
              </li>
            ))}
          </ul>

          <button 
            onClick={handleAddToCart} 
            disabled={!curSize}
            className="product__chooseSize__button"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
