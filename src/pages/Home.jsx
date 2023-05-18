import React from "react";
import Movie from "../components/Movie";
import CryptoDemo from "../components/CryptoDemo";
import TrendingCryptos from "../components/TrendingCryptos";

const Home = () => {  
  return (
    <>
      <Movie />
      <CryptoDemo />
      <TrendingCryptos />
    </>
  );
};

export default Home;
