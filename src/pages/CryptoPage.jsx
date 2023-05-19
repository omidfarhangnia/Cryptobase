import axios from "axios";
import React, { useEffect, useState } from "react";

const CryptoPage = () => {
  const [crypto, setCrypto] = useState({});
  const cryptoIDUrl = process.env.REACT_APP_CRYPTO_ID_URL;

  useEffect(() => {
    axios.get(cryptoIDUrl).then((response) => {
        setCrypto(response.data);
    });
  }, [cryptoIDUrl]);

  console.log(crypto)
  return <div>this is crypto page</div>;
};

export default CryptoPage;
