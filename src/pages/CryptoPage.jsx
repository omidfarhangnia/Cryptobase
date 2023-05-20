import axios from "axios";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { AiFillInstagram } from "react-icons/ai";
import { BsGithub, BsMeta, BsTwitter } from "react-icons/bs";
import { Sparklines, SparklinesLine } from "react-sparklines";
import DOMPurify from "dompurify";
import { gsap } from "gsap";

const CryptoPage = () => {
  const [crypto, setCrypto] = useState({});
  const cryptoIDUrl = process.env.REACT_APP_CRYPTO_ID_URL;

  useEffect(() => {
    axios.get(cryptoIDUrl).then((response) => {
      setCrypto(response.data);
    });
  }, [cryptoIDUrl]);

  useLayoutEffect(() => {
    const tl = gsap.timeline();
    tl
      .fromTo("#cryptoImage", {y: 80, opacity: 0}, {
        opacity: 1,
        y: 0,
        duration: .5,
        ease: "power3.out"
      })
      .fromTo(".cryptoNameAndId", {y: 60, opacity: 0}, {
        opacity: 1,
        y: 0,
        duration: .5,
        ease: 'power3.out',
        stagger: .2,
      })
      .fromTo(
        ".cryptoDataContainer > *",
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.25,
          stagger: 0.25,
          ease: "steps (1)",
        }
      )
      .fromTo(".cryptoDescription > *", {opacity: 0, y: 90}, {
        opacity: 1,
        y: 0,
        duration: .5,
        stagger: .5,
        ease: "power3.out"
      })
  }, []);

  return (
    <>
      <div className="flex flex-col gap-10 p-10">
        <div className="flex items-center gap-5 md:gap-10">
          <img
            src={crypto.image?.large}
            className="max-w-[140px] w-[40%] max-h-[140px] h-[40%]"
            alt="this is the symbol of crypto"
            id="cryptoImage"
          />
          <div className="flex flex-col">
            <h1 className="cryptoNameAndId text-2xl md:text-3xl lg:text-5xl font-bold capitalize md:mb-2 lg:mb-4">
              {crypto?.name}
            </h1>
            <div className="cryptoNameAndId uppercase text-[16px] md:text-1xl lg:text-2xl text-black/80">
              ({crypto?.symbol} / USD)
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center md:justify-between">
          <div className="cryptoDataContainer w-[90%] md:w-[45%] flex flex-col gap-4">
            <div className="flex w-full justify-between items-center">
              {crypto.market_data?.current_price && (
                <p className="text-2xl md:text-3xl lg:text-4xl font-bold font-opensSans">
                  ${crypto.market_data.current_price.usd.toLocaleString()}
                </p>
              )}
              <p className="text-1xl uppercase">7 day</p>
            </div>
            <div className="my-4">
              <Sparklines data={crypto.market_data?.sparkline_7d.price}>
                <SparklinesLine color="black" />
              </Sparklines>
            </div>
            <div className="flex justify-between">
              <div className="flex flex-col min-w-[30%]">
                <span className="capitalize font-bold">market cap</span>
                {crypto.market_data?.market_cap && (
                  <p>${crypto.market_data.market_cap.usd.toLocaleString()}</p>
                )}
              </div>
              <div className="flex flex-col min-w-[30%] items-end">
                <span className="capitalize font-bold">volume (24h)</span>
                {crypto.market_data?.market_cap && (
                  <p>${crypto.market_data.total_volume.usd.toLocaleString()}</p>
                )}
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex flex-col w-[30%] min-w-[30%]">
                <span className="capitalize font-bold">24h high</span>
                {crypto.market_data?.high_24h && (
                  <p>${crypto.market_data.high_24h.usd.toLocaleString()}</p>
                )}
              </div>
              <div className="flex flex-col min-w-[30%] items-end">
                <span className="capitalize font-bold">24h low</span>
                {crypto.market_data?.low_24h && (
                  <p>${crypto.market_data.low_24h.usd.toLocaleString()}</p>
                )}
              </div>
            </div>
          </div>
          <div className="cryptoDataContainer w-[90%] md:w-[45%] mt-10 md:mt-0">
            <h2 className="text-2xl capitalize font-bold mb-3 md:mb-5">
              market stats
            </h2>
            <div className="flex flex-wrap justify-between my-5 gap-y-5">
              <div className="flex flex-col w-[45%] lg:w-[30%]">
                <span className="font-semibold capitalize">market rank</span>
                <p>{crypto.market_cap_rank}</p>
              </div>
              <div className="flex flex-col w-[45%] lg:w-[30%]">
                <span className="font-semibold capitalize">
                  hashing algorithn
                </span>
                {crypto.hashing_algorithm && <p>{crypto.hashing_algorithm}</p>}
              </div>
              <div className="flex flex-col w-[45%] lg:w-[30%]">
                <span className="font-semibold capitalize">trust score</span>
                {crypto.tickers && <p>{crypto.liquidity_score.toFixed(2)}</p>}
              </div>
              <div className="flex flex-col w-[45%] lg:w-[30%]">
                <span className="font-semibold capitalize">
                  price change (24h)
                </span>
                {crypto.market_data && (
                  <p
                    className={`${
                      crypto.market_data.price_change_percentage_24h > 0
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {crypto.market_data.price_change_percentage_24h.toFixed(2)}
                  </p>
                )}
              </div>
              <div className="flex flex-col w-[45%] lg:w-[30%]">
                <span className="font-semibold capitalize">
                  price change (7d)
                </span>
                {crypto.market_data && (
                  <p
                    className={`${
                      crypto.market_data.price_change_percentage_7d > 0
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {crypto.market_data.price_change_percentage_7d.toFixed(2)}
                  </p>
                )}
              </div>
              <div className="flex flex-col w-[45%] lg:w-[30%]">
                <span className="font-semibold capitalize">
                  price change (14d)
                </span>
                {crypto.market_data && (
                  <p
                    className={`${
                      crypto.market_data.price_change_percentage_14d > 0
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {crypto.market_data.price_change_percentage_14d.toFixed(2)}
                  </p>
                )}
              </div>
              <div className="flex flex-col w-[45%] lg:w-[30%]">
                <span className="font-semibold capitalize">
                  price change (30d)
                </span>
                {crypto.market_data && (
                  <p
                    className={`${
                      crypto.market_data.price_change_percentage_30d > 0
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {crypto.market_data.price_change_percentage_30d.toFixed(2)}
                  </p>
                )}
              </div>
              <div className="flex flex-col w-[45%] lg:w-[30%]">
                <span className="font-semibold capitalize">
                  price change (60d)
                </span>
                {crypto.market_data && (
                  <p
                    className={`${
                      crypto.market_data.price_change_percentage_60d > 0
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {crypto.market_data.price_change_percentage_60d.toFixed(2)}
                  </p>
                )}
              </div>
              <div className="flex flex-col w-[45%] lg:w-[30%]">
                <span className="font-semibold capitalize">
                  price change (1y)
                </span>
                {crypto.market_data && (
                  <p
                    className={`${
                      crypto.market_data.price_change_percentage_1y > 0
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {crypto.market_data.price_change_percentage_1y.toFixed(2)}
                  </p>
                )}
              </div>
            </div>
            <div className="w-[90%] md:w-[80%] mx-auto md:ml-6">
              <nav>
                <ul className="flex justify-between mt-6">
                  <li>
                    <AiFillInstagram size={25} />
                  </li>
                  <li>
                    <BsTwitter size={25} />
                  </li>
                  <li>
                    <BsMeta size={25} />
                  </li>
                  <li>
                    <BsGithub size={25} />
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div className="cryptoDescription">
          <h2 className="text-2xl md:text-3xl font-bold capitalize mb-4">
            about {crypto.name}
          </h2>
          <p
            className="text-[16px] md:text-[17px] font-openSans text-justify"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(
                crypto.description ? crypto.description.en : null
              ),
            }}
          ></p>
        </div>
      </div>
    </>
  );
};

export default CryptoPage;
