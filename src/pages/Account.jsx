import React, { useEffect, useState } from "react";
import defaultProfileImage from "../images/Default_profile_image.png";
import { usePageData } from "../context/ContextData";
import { doc, updateDoc } from "firebase/firestore";
import { db, storage } from "../firebase";
import { MdChangeCircle } from "react-icons/md";
import { GrUploadOption } from "react-icons/gr";
import { CryptoPlaceHolder } from "../components/CryptoDemo";
import CryptoItem from "../components/CryptoItem";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

const Account = () => {
  const [profileImage, setProfileImage] = useState(null);
  const [isNewsActive, setIsNewsActive] = useState(false);
  const { userData, userDoc, cryptos } = usePageData();
  const folderRef = ref(storage, `images/${userDoc?.email}`);

  useEffect(() => {
    if (userDoc.length !== 0) {
      setIsNewsActive(userDoc.isCryptoNewsActive);
    }
  }, [userDoc]);

  useEffect(() => {
    getDownloadURL(ref(storage, `images/${userDoc?.email}`))
      .then((url) => {
        // const xhr = new XMLHttpRequest();
        // xhr.responseType = "blob";
        // xhr.onload = (event) => {
        //   const blob = xhr.response;
        // };
        // xhr.open("GET", url);
        // xhr.send();
        console.log(url);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [userData, userDoc]);

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

  function handleUploadImage() {
    try {
      uploadBytes(
        ref(storage, `images/${userDoc?.email}/${profileImage.name}`),
        profileImage
      );
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="flex flex-col justify-center items-center gap-5 my-[5vh] py-[15vh] bg-darkBlue accountBgImage">
      <div className="w-[30vw] h-[30vw] max-w-[200px] max-h-[200px] p-2 rounded-full relative">
        <img
          src={defaultProfileImage}
          aria-hidden
          alt={"this is profile image"}
        />
        {profileImage === null ? (
          <label
            htmlFor="selectImageInput"
            className="absolute bottom-0 right-0 cursor-pointer"
          >
            <MdChangeCircle size={30} className="fill-platinum" />
          </label>
        ) : (
          <GrUploadOption
            size={30}
            className="fill-platinum absolute bottom-0 right-0 cursor-pointer"
            onClick={handleUploadImage}
          />
        )}
        <input
          onChange={(e) => setProfileImage(e.target.files[0])}
          type="file"
          id="selectImageInput"
          className="hidden"
          accept=".jpg, .png, .jpeg"
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
