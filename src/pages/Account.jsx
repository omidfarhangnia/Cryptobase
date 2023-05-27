import React, { useEffect, useState } from "react";
import defaultProfileImage from "../images/Default_profile_image.png";
import { usePageData } from "../context/ContextData";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import { MdChangeCircle } from "react-icons/md";
import { CryptoPlaceHolder } from "../components/CryptoDemo";
import CryptoItem from "../components/CryptoItem";

const Account = () => {
  const [profileImage, setProfileImage] = useState("");
  const [isNewsActive, setIsNewsActive] = useState(false);
  const { userData, userDoc, cryptos } = usePageData();

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
    <div className="flex flex-col justify-center items-center gap-5 my-[5vh] py-[15vh] bg-darkBlue accountBgImage">
      <div className="w-[30vw] h-[30vw] max-w-[200px] max-h-[200px] p-2 rounded-full relative">
        <img
          src={profileImage === "" ? defaultProfileImage : profileImage}
          aria-hidden
          alt={"this is profile image"}
        />
        <MdChangeCircle
          size={30}
          className="fill-platinum absolute bottom-0 right-0"
        />
      </div>
      <p className="text-center text-white text-[20px] font-openSans">
        Email: {userData.email}
      </p>
      <div className="text-white text-[20px] rounded-lg border-2 min-w-[250px] border-solid py-4 overflow-hidden relative">
        <div
          className={`absolute ${
            isNewsActive ? "top-[100%]" : "top-0"
          } text-center min-w-[250px] capitalize transition-all`}
          onClick={handleNewsActive}
        >
          send me news
        </div>
        <div
          className={`absolute ${
            isNewsActive ? "top-0" : "top-[100%]"
          } text-center min-w-[250px] capitalize transition-all`}
          onClick={handleNewsInActive}
        >
          no need news
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mt-10 w-full">
        <h1 className="text-2xl md:text-3xl lg:text-4xl text-white capitalize">
          my favorite cryptos:
        </h1>
        <div className="overflow-x-scroll tableScrollBar w-[80%] ">
          <table className="bg-white mt-10 mx-auto w-[100%] rounded-lg min-h-[50vh] min-w-[1000px]">
            <thead>
              <tr className="border-b-4">
                <th className="py-3 capitalize font-openSans"></th>
                <th className="py-3 capitalize font-openSans">#</th>
                <th className="py-3 capitalize font-openSans text-start pl-5">
                  crypto
                </th>
                <th className="py-3 capitalize font-openSans"></th>
                <th className="py-3 capitalize font-openSans">price</th>
                <th className="py-3 capitalize font-openSans">24h</th>
                <th className="py-3 capitalize font-openSans">24h volume</th>
                <th className="py-3 uppercase font-openSans">mkt</th>
                <th className="py-3 capitalize font-openSans">last 7 days</th>
              </tr>
            </thead>
            <tbody>
              {cryptos.length > 0 ? (
                cryptos.map((crypto, index) => {
                  if (userDoc?.favorites?.includes(crypto?.name)) {
                    return (
                      <CryptoItem
                        key={index}
                        crypto={crypto}
                        cryptoStatus={userDoc?.favorites}
                      />
                    );
                  } else {
                    return "";
                  }
                })
              ) : (
                <CryptoPlaceHolder />
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Account;
