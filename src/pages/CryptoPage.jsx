import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiFillInstagram } from "react-icons/ai";
import { BsGithub, BsMeta, BsTwitter } from "react-icons/bs";
import { Sparklines, SparklinesLine } from "react-sparklines";
import DOMPurify from 'dompurify'


const CryptoPage = () => {
  const [crypto, setCrypto] = useState({});
  const cryptoIDUrl = process.env.REACT_APP_CRYPTO_ID_URL;

  useEffect(() => {
    axios.get(cryptoIDUrl).then((response) => {
      setCrypto(response.data);
    });
  }, [cryptoIDUrl]);

  return (
    <>
      <div className="">
        <div>
          <img src={crypto.image?.large} alt="this is the symbol of crypto" />
          <div>
            <h1>{crypto?.name} price</h1>
            <div className="uppercase">({crypto?.symbol} / USD)</div>
          </div>
        </div>
        <div>
          <div>
            <div>
              {crypto.market_data?.current_price && (
                <p>{crypto.market_data.current_price.usd.toLocaleString()}</p>
              )}
              <p>7 day</p>
            </div>
            <div>
              <Sparklines data={crypto.market_data?.sparkline_7d.price}>
                <SparklinesLine color="black" />
              </Sparklines>
            </div>
            <div>
              <div>
                <span>market cap</span>
                {crypto.market_data?.market_cap && (
                  <p>{crypto.market_data.market_cap.usd.toLocaleString()}</p>
                )}
              </div>
              <div>
                <span>volume (24h)</span>
                {crypto.market_data?.market_cap && (
                  <p>{crypto.market_data.total_volume.usd.toLocaleString()}</p>
                )}
              </div>
            </div>
            <div>
              <div>
                <span>24h high</span>
                {crypto.market_data?.high_24h && (
                <p>{crypto.market_data.high_24h.usd.toLocaleString()}</p>
              )}
              </div>
              <div>
                <span>24h low</span>
                {crypto.market_data?.low_24h && (
                <p>{crypto.market_data.low_24h.usd.toLocaleString()}</p>
              )}
              </div>
            </div>
          </div>
          <div>
            <h2>market stats</h2>
            <div>
              <div>
                <span>market rank</span>
                {crypto.market_cap_rank}
              </div>
              <div>
                <span>hashing algorithn</span>
                {crypto.hashing_algorithm && (
                <p>{crypto.hashing_algorithm}</p>
              )}
              </div>
              <div>
                <span>trust score</span>
                {crypto.tickers && (
                <p>{crypto.liquidity_score.toFixed(2)}</p>
              )}
              </div>
              <div>
                <span>price change 24h</span>
                {crypto.market_data && (<p className={`${crypto.market_data.price_change_percentage_24h > 0 ? "text-green-600" : "text-red-600"}`}>{crypto.market_data.price_change_percentage_24h.toFixed(2)}</p>)}
              </div>
              <div>
                <span>price change (7d)</span>
                {crypto.market_data && (<p className={`${crypto.market_data.price_change_percentage_7d > 0 ? "text-green-600" : "text-red-600"}`}>{crypto.market_data.price_change_percentage_7d.toFixed(2)}</p>)}
              </div>
              <div>
                <span>price change (14d)</span>
                {crypto.market_data && (<p className={`${crypto.market_data.price_change_percentage_14d > 0 ? "text-green-600" : "text-red-600"}`}>{crypto.market_data.price_change_percentage_14d.toFixed(2)}</p>)}
              </div>
              <div>
                <span>price change (30d)</span>
                {crypto.market_data && (<p className={`${crypto.market_data.price_change_percentage_30d > 0 ? "text-green-600" : "text-red-600"}`}>{crypto.market_data.price_change_percentage_30d.toFixed(2)}</p>)}
              </div>
              <div>
                <span>price change (60d)</span>
                {crypto.market_data && (<p className={`${crypto.market_data.price_change_percentage_60d > 0 ? "text-green-600" : "text-red-600"}`}>{crypto.market_data.price_change_percentage_60d.toFixed(2)}</p>)}
              </div>
              <div>
                <span>price change (1y)</span>
                {crypto.market_data && (<p className={`${crypto.market_data.price_change_percentage_1y > 0 ? "text-green-600" : "text-red-600"}`}>{crypto.market_data.price_change_percentage_1y.toFixed(2)}</p>)}
              </div>
            </div>
            <div>
              <nav>
                <ul>
                  <li>
                    <AiFillInstagram size={22} />
                  </li>
                  <li>
                    <BsTwitter size={22} />
                  </li>
                  <li>
                    <BsMeta size={22} />
                  </li>
                  <li>
                    <BsGithub size={22} />
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div>
          <h2>about {crypto.name}</h2>
          <p dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(crypto.description ? crypto.description.en : null)}}></p>
        </div>
      </div>
    </>
  );
};

export default CryptoPage;
