"use client";

import React from "react";
import Modal from "./Modal";

import CustomButton from "../forms/CustomButton";
import useSignUpModal from "@/app/hooks/useSignUpModal";

const SignUpModal = () => {
  const signUpModal = useSignUpModal();

  const content = (
    <>
      <h2 className="mb-6 text-2xl">Welcome to Djangobnb, please log in</h2>
      <form className="space-y-4">
        <input
          placeholder="your email address"
          type="email"
          className="w-full h-[54px] px-4 border border-gray-300 rounded-xl"
        />
        <input
          placeholder="your password"
          type="password"
          className="w-full h-[54px] px-4 py-4 border border-gray-300 rounded-xl"
        />
        <input
          placeholder="repeat password"
          type="password"
          className="w-full h-[54px] px-4 py-4 border border-gray-300 rounded-xl"
        />
        <div className="p-5 bg-airbnb text-white rounded-xl opacity-80">
          The Error Message
        </div>
        <CustomButton label="Submit" onClick={() => console.log("test")} />
      </form>
    </>
  );

  return (
    <Modal
      isOpen={signUpModal.isOpen}
      close={signUpModal.close}
      label="Sign Up"
      content={content}
    />
  );
};

export default SignUpModal;
