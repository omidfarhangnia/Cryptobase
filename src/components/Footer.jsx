import React, { useEffect, useState } from "react";
import { AiFillInstagram } from "react-icons/ai";
import { BsGithub, BsMeta, BsTiktok, BsTwitter } from "react-icons/bs";
import { usePageData } from "../context/ContextData";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

const Footer = () => {
  const [isNewsActive, setIsNewsActive] = useState(false);
  const { userDoc } = usePageData();

  useEffect(() => {
    if (userDoc.length !== 0) {
      setIsNewsActive(userDoc.isCryptoNewsActive);
    }
  }, [userDoc]);

  function handleNewsActive() {
    if (Object.keys(userDoc).length === 0) {
      alert("please sign in or sign up first");
    } else {
      updateDoc(doc(db, "users", `${userDoc.email}`), {
        isCryptoNewsActive: true,
      }).then(() => {
        setIsNewsActive(true);
      });
    }
  }

  function handleNewsInActive() {
    updateDoc(doc(db, "users", `${userDoc.email}`), {
      isCryptoNewsActive: false,
    }).then(() => {
      setIsNewsActive(false);
    });
  }

  return (
    <>
      <footer className="flex flex-col px-10 py-6">
        <div className="flex flex-wrap gap-[40px]">
          <div className="flex w-full md:w-auto flex-col">
            <h3 className="font-bold text-[20px] uppercase select-none mb-1">
              support
            </h3>
            <div className="text-[17px] uppercase hover:text-darkBlue cursor-pointer font-openSans mb-[3px]">
              help center
            </div>
            <div className="text-[17px] uppercase hover:text-darkBlue cursor-pointer font-openSans mb-[3px]">
              contact us
            </div>
            <div className="text-[17px] uppercase hover:text-darkBlue cursor-pointer font-openSans mb-[3px]">
              api status
            </div>
            <div className="text-[17px] uppercase hover:text-darkBlue cursor-pointer font-openSans mb-[3px]">
              documension
            </div>
          </div>
          <div className="flex w-full md:w-auto flex-col">
            <h3 className="font-bold text-[20px] uppercase select-none mb-1">
              info
            </h3>
            <div className="text-[17px] uppercase hover:text-darkBlue cursor-pointer font-openSans mb-[3px]">
              about us
            </div>
            <div className="text-[17px] uppercase hover:text-darkBlue cursor-pointer font-openSans mb-[3px]">
              careers
            </div>
            <div className="text-[17px] uppercase hover:text-darkBlue cursor-pointer font-openSans mb-[3px]">
              invest
            </div>
            <div className="text-[17px] uppercase hover:text-darkBlue cursor-pointer font-openSans mb-[3px]">
              legal
            </div>
          </div>
          <div className="flex w-full md:w-auto flex-col ml-auto">
            <div className="text-[20px] capitalize font-bold mb-4 text-center">
              sign up for crypto news
            </div>
            {isNewsActive ? (
              <button
                onClick={handleNewsInActive}
                className="text-[17px] w-auto text-center bg-darkBlue text-white py-2 px-5 rounded-xl capitalize border-2 border-solid border-transparent transition-all hover:bg-white hover:text-darkBlue hover:border-darkBlue"
              >
                i dont need news
              </button>
            ) : (
              <button
                onClick={handleNewsActive}
                className="text-[17px] w-auto text-center bg-darkBlue text-white py-2 px-5 rounded-xl capitalize border-2 border-solid border-transparent transition-all hover:bg-white hover:text-darkBlue hover:border-darkBlue"
              >
                send me news
              </button>
            )}
          </div>
        </div>
        <div className="flex justify-end w-full my-5">
          <nav className="md:w-[30%] lg:w-[20%] w-full max-w-[400px]">
            <ul className="flex justify-between">
              <li className="hover:-translate-y-1 transition-all">
                <AiFillInstagram size={25} />
              </li>
              <li className="hover:-translate-y-1 transition-all">
                <BsTiktok size={25} />
              </li>
              <li className="hover:-translate-y-1 transition-all">
                <BsTwitter size={25} />
              </li>
              <li className="hover:-translate-y-1 transition-all">
                <BsMeta size={25} />
              </li>
              <li className="hover:-translate-y-1 transition-all">
                <BsGithub size={25} />
              </li>
            </ul>
          </nav>
        </div>
        <div className="text-center text-[14px] capitalize">
          powered by coin gecko
        </div>
      </footer>
    </>
  );
};

export default Footer;
