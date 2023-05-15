import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home"; 
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Coinpage from "./pages/Coinpage";
import Account from "./pages/Account";
import ContextData from "./context/ContextData";

function App() {
  return (
    <ContextData>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/signin" element={<Signin />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/coinpage" element={<Coinpage />}/>
        <Route path="/account" element={<Account />}/>
      </Routes>
      <Footer />
    </ContextData>
  );
}

export default App;
