import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/AppSlice";
import { Link } from "react-router-dom";
import { YOUTUBE_SEARCH_API } from "../constants";
import { cacheResults } from "../utils/searchSlice";

const Header = () => {
  const [searchQuery, setSearchQeary] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const dispatch = useDispatch();

  const searchCache = useSelector((store) => store.search);
  /*
      How our cache looks like

      {
          "iphone": ["iphone 11", "iphone 13"],
          "iphone 14": ["iphone 14 pro", "iphone 14 pro max"]
      }
  */

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  useEffect(() => {
    // API CALL HERE

    // ------ Debouncing in search -------
    // Make an API call after every key press
    // but if the difference between two API calls is less than <200
    // decline the API call
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        // check if the searchQuery is present in cache or not
        setSuggestions(searchCache[searchQuery]); // if present then return the value of that searchQuery
      } else {
        // if not present in the cache make a new API
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    //console.log("fetching the data...");
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);

    // update cache
    // here we are updating the cache with the new data.
    // key ===> searchQuery
    // value ==> json[1]
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  return (
    <header className="flex bg-black h-16 lg:px-5 text-white items-center justify-between sticky top-0 z-50 px-2">
      <div className="flex items-center lg:gap-4 gap-1 h-6">
        <i
          className="fa-solid fa-bars text-xl cursor-pointer"
          onClick={toggleMenuHandler}
        ></i>

        <Link to="/">
          <img src="/ytlogo2.png" className="h-6 w-25" alt="YouTube logo" />
        </Link>
      </div>

      <div className="flex items-center h-8 flex-col">
        <div className="flex items-center border-2 border-gray-600 rounded-full p-1 px-4 hover:border-gray-400">
          <input
            type="text"
            className="bg-transparent w-[150px] sm:w-[300px] lg:w-[500px] h-8  text-sm focus:outline-none"
            placeholder="search"
            value={searchQuery}
            onChange={(e) => setSearchQeary(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <div className="text-white w-5 cursor-pointer">
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>

        {/* suggestion section   */}
        {showSuggestions && (
          <div className="bg-[#272727] w-11/12 rounded-lg">
            <ul>
              {suggestions.map((s) => {
                return (
                  <li
                    key={s}
                    className="p-2 hover:bg-[#484646] cursor-pointer flex gap-2 items-center"
                  >
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <p>{s}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>

      <div className="text-xl lg:gap-7 gap-2 lg:flex hidden items-center">
        <i className="fa-solid fa-video hidden md:flex cursor-pointer"></i>
        <i className="fa-solid fa-bell hidden md:flex cursor-pointer"></i>
        <Link to="/profile">
          <i className="fa-solid fa-user cursor-pointer "></i>
        </Link>
      </div>
    </header>
  );
};

export default Header;
