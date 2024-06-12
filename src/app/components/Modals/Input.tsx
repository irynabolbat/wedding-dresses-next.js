"use client";
import "@/app/styles/ModalWindow.scss";

type InputProps = {
  labelText: string;
  inputType: string;
  inputName: string;
  changeInputValue?: (value: string) => void;
};

export const Input = ({
  labelText,
  inputType,
  inputName,
  changeInputValue,
}: InputProps) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700">{labelText}:</label>
      <input
        type={inputType}
        name={inputName}
        required
        className="modalWindow__form__input border w-full"
        onChange={(event) =>
          changeInputValue && changeInputValue(event.target.value)
        }
      />
    </div>
  );
};
