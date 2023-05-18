import React, { useEffect, useState } from "react";
import { Route, Router, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Account from "./pages/Account";
import ContextData from "./context/ContextData";
import MenuBar from "./components/MenuBar";
import CryptoNewsPage from "./pages/CryptoNewsPage";
import axios from "axios";

function App() {
  const [cryptos, setCryptos] = useState([]);
  const url = process.env.REACT_APP_FETCH_URL;

  useEffect(() => {
    // axios.get(url).then((response) => {
    //   setCryptos(response.data);
    // });
  }, [url]);
  
  return (
    <ContextData cryptos={cryptos}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/news" element={<CryptoNewsPage />} />
        <Route path="/account" element={<Account />} />
      </Routes>
      <Footer />
      <MenuBar />
    </ContextData>
  );
}

export default App;
