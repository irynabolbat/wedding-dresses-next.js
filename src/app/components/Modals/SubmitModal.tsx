"use client";
import Image from "next/image";
import CloseIcon from "@/app/assets/icons/close-menu.svg";
import { useState, FormEvent } from "react";
import { TranksModal } from "./TranksModal";
import { Input } from "./Input";
import "@/app/styles/ModalWindow.scss";
import PageTitle from "../PageTitle";
import emailjs from '@emailjs/browser';

type SubmitModalProps = {
  closeModal: () => void;
  cleanCart: () => void;
};

export const SubmitModal = ({ closeModal, cleanCart }: SubmitModalProps) => {
  const [thankYouModal, setThankYouModal] = useState(false);
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phoneNum, setPhoneNum] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const sendEmail = () => {
    const serviceId = process.env.NEXT_PUBLIC_YOUR_SERVICE_ID || '';
    const templateId = process.env.NEXT_PUBLIC_YOUR_TEMPLATE_ID || '';
    const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY || '';

    const templateParams = {
      subject: "Order in BRIDE'S CHARM",
      name: `${firstName} ${lastName}`,
      email,
      phone: phoneNum,
      message
    };

    emailjs
    .send(serviceId, templateId, templateParams, {
      publicKey: publicKey,
    }).catch((error) => {
        console.error('Error:', error.text)
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendEmail();
    setThankYouModal(true);
    cleanCart();
  };

  const closeThankYouModal = () => {
    setThankYouModal(false);
    closeModal();
  };

  return (
    <>
      <dialog
        className="fixed left-0 top-0 w-full h-full bg-black bg-opacity-50 z-50 overflow-auto backdrop-blur flex justify-center items-center"
        open
      >
        <div className="modalWindow shadow-lg max-w-lg w-full">
          <div className="modalWindow__content space-y-4">
            <button
              onClick={closeModal}
              className="modalWindow__close"
            >
              <Image
                src={CloseIcon}
                width={20}
                height={20}
                alt="Close"
              />
            </button>
            <PageTitle title="Contact Form" />

            <form
              className="modalWindow__form w-full"
              onSubmit={handleSubmit}
            >
              <Input
                labelText="First name"
                inputType="text"
                inputName="firstName"
                changeInputValue={setFirstName}
              />

              <Input
                labelText="Last name"
                inputType="text"
                inputName="lastName"
                changeInputValue={setLastName}
              />

              <Input
                labelText="Phone"
                inputType="tel"
                inputName="phoneNumber"
                changeInputValue={setPhoneNum}
              />

              <Input
                labelText="E-mail"
                inputType="email"
                inputName="email"
                changeInputValue={setEmail}
              />

              <div className="mb-4">
                <label className="block text-gray-700">Comment:</label>
                <textarea
                  name="comment"
                  className="modalWindow__form__input border w-full"
                  onChange={e => setMessage(e.target.value)}
                ></textarea>
              </div>

              <button
                type="submit"
                className="modalWindow__form__button w-full"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </dialog>

      {thankYouModal && (
        <TranksModal
          firstName={firstName}
          lastName={lastName}
          closeModal={closeThankYouModal}
        />
      )}
    </>
  );
};
