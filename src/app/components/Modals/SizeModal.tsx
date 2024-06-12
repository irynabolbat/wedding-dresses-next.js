"use client";
import cn from "classnames";
import "@/app/styles/ModalWindow.scss";
import PageTitle from "../PageTitle";
import { Dress } from "@/types/Dress";
import Image from "next/image";
import CloseIcon from "@/app/assets/icons/close-menu.svg";

type SizeModalProps = {
  dress: Dress;
  sizes: string[];
  curSize: string | null;
  onClose: () => void;
  onAddToCart: (dress: Dress) => void;
  onSelectSize: (size: string) => void;
};

const SizeModal = ({
  dress,
  sizes,
  curSize,
  onClose,
  onAddToCart,
  onSelectSize,
}: SizeModalProps) => {
  return (
    <dialog
      className="fixed left-0 top-0 w-full h-full bg-black bg-opacity-50 z-50 overflow-auto backdrop-blur flex justify-center items-center"
      open
    >
      <div className="modalWindow shadow-lg max-w-lg w-full">
        <div className="modalWindow__content">
          <div
            className="modalWindow__close"
            onClick={onClose}
          >
            <Image
              src={CloseIcon}
              width={20}
              height={20}
              alt="Close"
            />
          </div>
          <PageTitle title="Choose size" />
          <ul className="modalWindow__sizes">
            {sizes.map((size) => (
              <li
                key={size}
                className="modalWindow__size"
              >
                <button
                  onClick={() => onSelectSize(size)}
                  className={cn("modalWindow__size__button", {
                    "modalWindow__size__button--selected": size === curSize,
                  })}
                >
                  {size}
                </button>
              </li>
            ))}
          </ul>
          <button
            disabled={!curSize}
            className="modalWindow__addAndClose"
            onClick={() => onAddToCart(dress)}
          >
            Add to cart
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default SizeModal;
