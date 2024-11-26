"use client";

import { useState } from "react";
import Image from "next/image";
import dressImg from "@/app/assets/images/reset_pswd.jpg";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "@/config";
import { toast } from "react-toastify";
import Input from "../../components/Input";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Login() {
  const [email, setEmail] = useState<string>("");

  const router = useRouter();

  const resetPassword = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email) {
      toast.error("Please enter your email to reset your password");
      router.push("login");
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      toast.success("Password reset email sent successfully to your email");
    } catch (error: any) {
      toast.error(`Failed to send reset email: ${error.message}`);
    }
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
              <h2>RESET PASSWORD</h2>
            </div>
          </div>

          <form className="auth_form" onSubmit={resetPassword}>
            <div className="auth_form-inputs">
              <Input
                inputType={"email"}
                inputPlaceholder={"Email"}
                inputValue={email}
                handlerChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="auth_btn-wrapper">
              <button type="submit" className="auth_signin">
                Reset
              </button>
            </div>
          </form>

          <p className="auth_register-now">
            Back to login? &nbsp;
            <Link className="auth_login-now-link" href="/login">
              Sign In
            </Link>
          </p>

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
