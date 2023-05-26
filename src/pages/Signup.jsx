import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { usePageData } from "../context/ContextData";

const Signup = () => {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [isPasswordVisibile, setIsPasswordVisible] = useState(false);
  const inputRef = useRef("");
  const { handleSignUp } = usePageData();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      className="bg-platinum py-[15vh]"
    >
      <div className="flex flex-col gap-5 px-10">
        <input
          className="fotn-openSans text-black p-3 text-[20px] placeholder:capitalize font-mono rounded-lg"
          type="email"
          value={emailValue}
          onChange={(e) => setEmailValue(e.target.value)}
          autoComplete="new-password"
          placeholder="email..."
        />
        <input
          className="fotn-openSans text-black p-3 text-[20px] placeholder:capitalize font-mono rounded-lg"
          type="password"
          value={passwordValue}
          onChange={(e) => {
            setPasswordValue(e.target.value);
          }}
          ref={inputRef}
          autoComplete="new-password"
          placeholder="password..."
        />
        <div className="-mt-3 flex items-center gap-1">
          <input
            value={isPasswordVisibile}
            type="checkbox"
            id="showPassword"
            onChange={(e) => {
              inputRef.current.type = !isPasswordVisibile ? "text" : "password";
              setIsPasswordVisible(!isPasswordVisibile);
            }}
          />{" "}
          <label
            htmlFor="showPassword"
            className="capitalize text-mono text-[15px] "
          >
            show password
          </label>
        </div>
        <button
          className="w-full bg-darkBlue text-white text-[20px] text-center py-2 capitalize font-bold rounded-lg"
          onClick={() => {
            handleSignUp(emailValue, passwordValue);
          }}
        >
          sign up
        </button>
        <p className="capitalize text-[15px]">
          if you have already an account{" "}
          <Link to="/signin" className="underline font-bold">
            sign in
          </Link>
        </p>
      </div>
    </form>
  );
};

export default Signup;
