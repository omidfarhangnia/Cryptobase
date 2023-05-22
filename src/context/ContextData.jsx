import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import React, {
  createContext,
  useContext,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import { auth } from "../firebase";
import Signin from "../pages/Signin";

const pageData = createContext(null);

const ContextData = ({ cryptos, trendingCryptos, children }) => {
  const [userData, setUserData] = useState({});

  useLayoutEffect(() => {
    const onsubscribe = onAuthStateChanged(auth, (user) => {
      setUserData(user);
    });
    return () => {
      onsubscribe();
    };
  }, []);

  const handleLogOut = async () => {
    signOut(auth)
      .then(() => {
        alert("log out was succsefully");
      })
      .catch((error) => {
        alert(error);
      });
  };

  const handleSignIn = async (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userData) => {
        setUserData(userData);
      })
      .catch((error) => {
        alert("guess what you have an error " + error);
      });
  };

  const handleSignUp = async(email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userData) => {
      setUserData(userData)
    })
    .catch((error) => {
      alert("guess what you have an error " + error.code + " // " + error.message)
    })
  }

  return (
    <pageData.Provider
      value={{ cryptos, trendingCryptos, userData, handleLogOut, handleSignIn, handleSignUp }}
    >
      {children}
    </pageData.Provider>
  );
};

export function usePageData() {
  return useContext(pageData);
}

export default ContextData;
