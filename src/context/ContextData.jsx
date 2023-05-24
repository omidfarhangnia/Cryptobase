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
  useState,
} from "react";
import { auth, db } from "../firebase";
import {
  collection,
  doc,
  getDocs,
  onSnapshot,
  query,
  setDoc,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const pageData = createContext(null);

const ContextData = ({ cryptos, trendingCryptos, children }) => {
  const [userData, setUserData] = useState({});
  const [userDoc, setUserDoc] = useState({});
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
            setUserDoc({...doc.data()})
          }
        });
      });
      return () => unsubscribe();
    }
  }, [userData]);

  const handleLogOut = async () => {
    signOut(auth)
      .then(() => {
        alert("log out was succsefully");
        navigate("/");
      })
      .catch((error) => {
        alert(error);
      });
  };

  const handleSignIn = async (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userData) => {
        navigate("/");
      })
      .catch((error) => {
        alert("guess what you have an error " + error);
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
        alert(
          "guess what you have an error " + error.code + " // " + error.message
        );
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
