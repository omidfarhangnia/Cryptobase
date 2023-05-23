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
    <form onSubmit={(e) => {e.preventDefault()}}>
      <div className="flex flex-col">
        <input
          type="email"
          value={emailValue}
          onChange={(e) => setEmailValue(e.target.value)}
          autoComplete="new-password"
        />
        <input
          type="password"
          value={passwordValue}
          onChange={(e) => {
            setPasswordValue(e.target.value);
          }}
          ref={inputRef}
          autoComplete="new-password"
        />
        <div>
          <input
            value={isPasswordVisibile}
            type="checkbox"
            id="showPassword"
            onChange={(e) => {
              inputRef.current.type = !isPasswordVisibile ? "text" : "password";
              setIsPasswordVisible(!isPasswordVisibile);
            }}
          />{" "}
          <label htmlFor="showPassword">show password</label>
        </div>
        <button
          onClick={() => {
            handleSignUp(emailValue, passwordValue);
          }}
        >
          sign up
        </button>
        <p>
          if you have already an account
          <Link to="/signin">sign in</Link>
        </p>
      </div>
    </form>
  );
};

export default Signup;
