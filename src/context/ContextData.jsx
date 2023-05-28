import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import React, {
  createContext,
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { auth, db, storage } from "../firebase";
import {
  collection,
  doc,
  getDocs,
  onSnapshot,
  query,
  setDoc,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

const pageData = createContext(null);

const ContextData = ({ cryptos, trendingCryptos, children }) => {
  const [userData, setUserData] = useState({});
  const [userDoc, setUserDoc] = useState({});
  const [userImage, setUserImage] = useState(null);
  const navigate = useNavigate();

  useLayoutEffect(() => {
    const onsubscribe = onAuthStateChanged(auth, (user) => {
      setUserData(user);
    });
    return () => {
      onsubscribe();
    };
  }, []);

  useEffect(() => {
    if (userData !== null) {
      const q = query(collection(db, "users"));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        querySnapshot.docs.map((doc) => {
          if (doc.data()?.email === userData?.email) {
            setUserDoc({ ...doc.data() });
          }
        });
      });
      return () => unsubscribe();
    }
  }, [userData]);

  const handleLogOut = async () => {
    signOut(auth)
      .then(() => {
        console.log("logout was successfuly");
        setUserDoc({});
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        alert("something went wrong try again");
      });
  };

  const handleSignIn = async (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userData) => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        alert("something went wrong try again");
      });
  };

  const handleSignUp = async (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        setDoc(doc(db, "users", email), {
          email: email,
          password: password,
          favorites: [],
          isCryptoNewsActive: false,
        });
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        alert("something went wrong try again");
      });
  };

  return (
    <pageData.Provider
      value={{
        cryptos,
        trendingCryptos,
        userData,
        userDoc,
        handleLogOut,
        handleSignIn,
        handleSignUp,
      }}
    >
      {children}
    </pageData.Provider>
  );
};

export function usePageData() {
  return useContext(pageData);
}

export default ContextData;
