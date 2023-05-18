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
  const [trendingCryptos, setTrendingCryptos] = useState([]);
  const cryptoUrl = process.env.REACT_APP_CRYPTOS_URL;
  const trendingCryptoUrl = process.env.REACT_APP_TRENDING_CRYTPO_URL

  useEffect(() => {
    axios.get(cryptoUrl).then((response) => {
      setCryptos(response.data);
    });
  }, [cryptoUrl]);

  useEffect(() => {
    axios.get(trendingCryptoUrl).then((response) => {
      setTrendingCryptos(response.data.coins);
    })
  }, [trendingCryptoUrl])
  
  return (
    <ContextData cryptos={cryptos} trendingCryptos={trendingCryptos}>
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
