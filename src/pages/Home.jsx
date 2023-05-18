import React from "react";
import Movie from "../components/Movie";
import CryptoDemo from "../components/CryptoDemo";
import { useContextData } from "../context/ContextData";

const Home = () => {  
  return (
    <>
      <Movie />
      <CryptoDemo />
    </>
  );
};

export default Home;
