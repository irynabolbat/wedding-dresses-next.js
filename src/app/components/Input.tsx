import { TextInputProps } from "@/types/inputType";
import React from "react";
import "@/app/styles/Input.scss";

const Input: React.FC<TextInputProps> = ({
  inputType = "text",
  inputPlaceholder,
  inputValue,
  inputRef,
  error,
  handlerChange,
}) => {
  return (
    <div className="input-wrapper">
      <input
        type={inputType}
        placeholder={inputPlaceholder}
        value={inputValue}
        onChange={handlerChange}
        className="input"
        autoComplete="new-password"
        ref={inputRef}
        required
      />
      {error && <p className="input_error">{error}</p>}
    </div>
  );
};

export default Input;
