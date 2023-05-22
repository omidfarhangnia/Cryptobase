import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { usePageData } from "../context/ContextData";

const Signin = () => {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [isPasswordVisibile, setIsPasswordVisible] = useState(false);
  const inputRef = useRef("");
  const { handleSignIn } = usePageData();

  return (
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
      <button onClick={() => {
        handleSignIn(emailValue, passwordValue)
      }}>sign in</button>
      <p>
        you are new please
        <Link to="/signup">sign up</Link>
      </p>
    </div>
  );
};

export default Signin;
