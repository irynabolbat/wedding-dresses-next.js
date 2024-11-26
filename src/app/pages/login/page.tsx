"use client";

import { useState } from "react";
import GmailIcon from "@/app/assets/icons/icon_gmail.svg";
import Image from "next/image";
import Link from "next/link";
import dressImg from "@/app/assets/images/login.jpg";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "@/config";
import { toast } from "react-toastify";
import Input from "../../components/Input";
import { useRouter } from "next/navigation";
import { validateEmail, validatePassword } from "../../helpers/utils";

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const router = useRouter();

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validateEmail(email) || !validatePassword(password)) return;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("You are successfully logged in");
      router.push("/");
    } catch (error: any) {
      toast.error(`Error: ${error.message}`);
    }
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      toast.success("You are successfully logged in with Google");
      router.push("/");
    } catch (error: any) {
      toast.error("Google login failed");
    }
  };

  const handleInputChange =
    (setter: React.Dispatch<React.SetStateAction<string>>) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setter(event.target.value);
    };

  return (
    <div className="auth">
      <div className="auth_img-wrapper">
        <Image src={dressImg} alt="Sign-In Image" className="auth_img" />
      </div>

      <div className="auth_form-wrapper">
        <div className="auth_form-body">
          <div className="auth_header-wrapper">
            <div className="title-wrapper">
              <h2>LOGIN</h2>
            </div>
          </div>

          <form className="auth_form" onSubmit={handleLogin}>
            <div className="auth_form-inputs">
              <Input
                inputType={"email"}
                inputPlaceholder={"Email"}
                inputValue={email}
                handlerChange={handleInputChange(setEmail)}
              />

              <Input
                inputType={"password"}
                inputPlaceholder={"Password"}
                inputValue={password}
                handlerChange={handleInputChange(setPassword)}
              />
            </div>

            <div className="auth_forgot-pwd">
              <Link
                className="auth_forgot-pwd-link"
                href="/forgot-password"
                id="reset"
              >
                Forgot password?
              </Link>
            </div>

            <div className="auth_btn-wrapper">
              <button type="submit" className="auth_signin">
                Sign In
              </button>
              <button
                type="button"
                onClick={handleGoogleLogin}
                className="auth_google"
              >
                <Image src={GmailIcon} width={25} alt="Gmail Icon" />
              </button>
            </div>
          </form>

          <p className="auth_register-now">
            Do not have an account? &nbsp;
            <Link className="auth_register-now-link" href="/registration">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
