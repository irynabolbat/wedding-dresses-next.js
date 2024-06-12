"use client";
import "@/app/styles/ModalWindow.scss";
import PageTitle from "../PageTitle";

type ThanksModalProps = {
  firstName: string;
  lastName: string;
  closeModal: () => void;
};

export const TranksModal = ({
  firstName,
  lastName,
  closeModal,
}: ThanksModalProps) => {
  return (
    <dialog
      className="fixed left-0 top-0 w-full h-full bg-black bg-opacity-50 z-50 overflow-auto backdrop-blur flex justify-center items-center"
      open
    >
      <div className="modalWindow shadow-lg max-w-lg w-full">
        <div className="flex flex-col items-center space-y-4">
          <PageTitle title="Thank You!" />
          <p>
            <span>{`${firstName} ${lastName}`}</span>, thank you for your order!
            Our manager will contact you soon!
          </p>
          <button
            type="button"
            className="modalWindow__button"
            onClick={closeModal}
          >
            Close
          </button>
        </div>
      </div>
    </dialog>
  );
};
