import React, { useEffect, useMemo, useState } from "react";
import { findPrime } from "../helper";
import { closeMenu } from "../utils/AppSlice";
import { useDispatch } from "react-redux";

const Profile = () => {
  const [text, setText] = useState(1);
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const dispatch = useDispatch();

  const prime = useMemo(() => findPrime(text), [text]);

  const handleDarkTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div
      className={
        "flex p-7 w-72 justify-center items-center flex-col lg:w-screen my-8 mx-3 border " +
        (isDarkTheme ? "bg-black text-white" : "bg-white text-black")
      }
    >
      <div className="text-4xl" onClick={handleDarkTheme}>
        <button className="border-2 border-red-800 p-4 rounded-full h-24 w-24">
          {isDarkTheme ? (
            <i className="fa-solid fa-sun"></i>
          ) : (
            <i className="fa-solid fa-moon"></i>
          )}
        </button>
      </div>

      <div className="p-2">
        <div>
          <input
            className={"p-2 my-2 font-bold border-2 border-black text-red-900"}
            type="number"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>

        <div>
          <p className="text-center font-bold text-xl">Prime number: {prime}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
