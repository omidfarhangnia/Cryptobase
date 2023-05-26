import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { usePageData } from "../context/ContextData";

const Signup = () => {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [isPasswordVisibile, setIsPasswordVisible] = useState(false);
  const [inputCheck, setInputCheck] = useState("ok");
  // i have three status for this state ==> ok // shortPassword // wrongEmail
  const inputRef = useRef("");
  const { handleSignUp } = usePageData();

  function checkEmailAndPassword() {
    if (!emailValue.match(/(@gmail.com)$/gm)) {
      setInputCheck("wrongEmail");
    } else if (passwordValue.length < 8) {
      setInputCheck("shortPassword");
    } else {
      setInputCheck("ok");
      handleSignUp(emailValue, passwordValue);
    }
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      className="bg-platinum py-[15vh]"
    >
      <div className="flex flex-col gap-5 px-10 max-w-[500px] w-[50%] mx-auto">
        <div>
          <input
            className="fotn-openSans w-full text-black p-3 text-[20px] placeholder:capitalize font-mono rounded-lg"
            type="email"
            value={emailValue}
            onChange={(e) => setEmailValue(e.target.value)}
            autoComplete="new-password"
            placeholder="email..."
          />
          <p
            className={`mt-2 capitalize text-[15px] ${
              inputCheck === "wrongEmail" && "visible text-red-500"
            } ${
              (inputCheck === "ok" || inputCheck === "shortPassword") &&
              "invisible"
            }`}
          >
            {(inputCheck === "ok" || inputCheck === "shortPassword") &&
              "lorem ipsum dolor"}
            {inputCheck === "wrongEmail" && "your email is not correct"}
          </p>
        </div>
        <div>
          <input
            className="fotn-openSans w-full text-black p-3 text-[20px] placeholder:capitalize font-mono rounded-lg"
            type="password"
            value={passwordValue}
            onChange={(e) => {
              setPasswordValue(e.target.value);
            }}
            ref={inputRef}
            autoComplete="new-password"
            placeholder="password..."
          />
          <p
            className={`mt-2 capitalize text-[15px] ${
              (inputCheck === "ok" || inputCheck === "wrongEmail") &&
              "invisible"
            } ${inputCheck === "shortPassword" && "visible text-red-500 "}`}
          >
            {(inputCheck === "ok" || inputCheck === "wrongEmail") &&
              "lorem ipsum dolor"}
            {inputCheck === "shortPassword" &&
              "minimum password size 8 letters"}
          </p>
        </div>
        <div className="mb-3 flex items-center gap-1">
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
          onClick={checkEmailAndPassword}
        >
          sign up
        </button>
        <p className="capitalize text-[15px]">
          if you have already an account{" "}
          <Link to="/signin" className="underline font-bold">
            sign in
          </Link>
          .
        </p>
      </div>
    </form>
  );
};

export default Signup;
