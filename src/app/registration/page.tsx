"use client";

import { useState, useCallback, useRef } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/config";
import Image from "next/image";
import Link from "next/link";
import dressImg from "@/app/assets/images/register.jpg";
import { validateEmail, validatePassword } from "../helpers/utils";
import { toast } from "react-toastify";
import Input from "../components/Input";
import { useRouter } from "next/navigation";

export default function Registration() {
  const [name, setName] = useState<string>("");
  const [surname, setSurname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmedPassword, setConfirmedPassword] = useState<string>("");

  const [emailError, setEmailError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const [confirmPasswordError, setConfirmPasswordError] = useState<string>("");

  const router = useRouter();

  const validateForm = (): boolean => {
    let isValid = true;

    if (!validateEmail(email)) {
      setEmailError("Invalid email format");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (!validatePassword(password)) {
      setPasswordError("Password must be at least 6 characters long");
      isValid = false;
    } else {
      setPasswordError("");
    }

    if (password !== confirmedPassword) {
      setConfirmPasswordError("Passwords do not match");
      isValid = false;
    } else {
      setConfirmPasswordError("");
    }

    return isValid;
  };

  const handleRegistration = useCallback(
    async (event: React.FormEvent) => {
      event.preventDefault();

      if (!validateForm()) return;

      try {
        await createUserWithEmailAndPassword(auth, email, password);
        toast.success("Registration successful!");
        router.push("/");
      } catch (error: any) {
        toast.error(`Error: ${error.message}`);
      }
    },
    [email, password, confirmedPassword]
  );

  const handleInputChange =
    (setter: React.Dispatch<React.SetStateAction<string>>) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setter(event.target.value);
    };

  return (
    <div className="auth">
      <div className="auth_img-wrapper">
        <Image src={dressImg} alt="Sign-Up Image" className="auth_img" />
      </div>

      <div className="auth_form-wrapper">
        <div className="auth_form-body">
          <div className="auth_header-wrapper">
            <div className="title-wrapper">
              <h2>REGISTRATION</h2>
            </div>
          </div>

          <form className="auth_form" onSubmit={handleRegistration}>
            <div className="auth_form-inputs">
              <Input
                inputPlaceholder={"First name"}
                inputValue={name}
                handlerChange={handleInputChange(setName)}
              />

              <Input
                inputPlaceholder={"Last name"}
                inputValue={surname}
                handlerChange={handleInputChange(setSurname)}
              />

              <Input
                inputType={"email"}
                inputPlaceholder={"Email"}
                inputValue={email}
                handlerChange={handleInputChange(setEmail)}
                error={emailError}
              />

              <Input
                inputType={"password"}
                inputPlaceholder={"Password"}
                inputValue={password}
                handlerChange={handleInputChange(setPassword)}
                error={passwordError}
              />

              <Input
                inputType={"password"}
                inputPlaceholder={"Confirm password"}
                inputValue={confirmedPassword}
                handlerChange={handleInputChange(setConfirmedPassword)}
                error={confirmPasswordError}
              />
            </div>

            <div className="auth_btn-wrapper">
              <button type="submit" className="auth_signup">
                Sign up
              </button>
            </div>
          </form>

          <p className="auth_login-now">
            Already have an account?{" "}
            <Link href="/login" className="auth_login-now-link">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
