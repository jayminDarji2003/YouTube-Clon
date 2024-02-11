import React, { useEffect } from "react";
import ButtonsCarousel from "./ButtonsCarousel";
import VideoContainer from "./VideoContainer";
import { useDispatch } from "react-redux";
import { openMenu } from "../utils/AppSlice";

const MainContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(openMenu());
  }, []);

  return (
    <div className="text-black w-full">
      <ButtonsCarousel />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
