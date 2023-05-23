import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import React, {
  createContext,
  useContext,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import { auth, db } from "../firebase";
import Signin from "../pages/Signin";
import { addDoc, collection, doc, getDoc, onSnapshot, query, setDoc } from "firebase/firestore";
import { Navigate, useNavigate } from "react-router-dom";
import { setConfig } from "dompurify";

const pageData = createContext(null);

const ContextData = ({ cryptos, trendingCryptos, children }) => {
  const [userData, setUserData] = useState({});
  const [user, setUser] = useState({});
  const navigate = useNavigate();

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
        navigate("/")
      })
      .catch((error) => {
        alert(error);
      });
  };

  const handleSignIn = async (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userData) => {
        navigate("/")
      })
      .catch((error) => {
        alert("guess what you have an error " + error);
      });
  };

  const handleSignUp = async(email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      setDoc(doc(db, "users", email), {
        email: email,
        password: password,
        favorites: [],
        isCryptoNewsActive: false,
      })
    
      navigate("/")
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

/*
  const [user, setUser] = useState({});

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  });

  function signUp(email, password) {
    createUserWithEmailAndPassword(auth, email, password);
    setDoc(doc(db, "users", email), {
      savedShows: []
    })
  }

  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logOut() {
    return signOut(auth);
  }
*/