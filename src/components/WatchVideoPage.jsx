import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/AppSlice";
import { Link, useSearchParams } from "react-router-dom";
import SuggestedVideo from "./SuggestedVideo";
import CommentContainer from "./CommentContainer";
import LiveChat from "./LiveChat";
import CountFormatter from "./CountFormatter";

const WatchVideoPage = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const videoId = searchParams.get("v");
  const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=AIzaSyAchkxS61EhuWM3ftW_614cDic0SZi6FjQ`;
  const [videoInfo, setVideoInfo] = useState(null);

  useEffect(() => {
    dispatch(closeMenu());
    getVideoInfo();
  }, [searchParams]);

  useEffect(() => {
    getVideoInfo();
  }, [searchParams]);

  const getVideoInfo = async () => {
    const data = await fetch(url);
    const json = await data.json();
    // console.log(json);
    setVideoInfo(json?.items[0]);
    console.log(json?.items[0]);
  };

  return (
    <div className="bg-black text-white flex flex-col lg:flex-row lg:m-8 my-5 gap-5 container">
      <div>
        <iframe
          className="w-80 h-56 lg:h-[500px] lg:w-[900px] rounded-2xl"
          src={`https://www.youtube.com/embed/${videoId}?si=y7YYFvH5PISwPjgU`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>

        <div className="my-4">
          <p className="font-bold text-lg max-w-72 md:max-w-full md:text-xl">
            {videoInfo?.snippet?.title}
          </p>
          <div className="flex gap-5 my-5 lg:items-center flex-col md:flex-row">
            <div className="flex  gap-5  flex-col md:flex-row md:gap-5">
              <Link
                to={`/channel?v=${videoInfo?.snippet?.channelId}`} // Pass necessary props through URL
                className="font-bold text-2xl"
              >
                {videoInfo?.snippet?.channelTitle}
              </Link>
              <Link
                to={`/channel?v=${videoInfo?.snippet?.channelId}`}
                className="bg-white w-60 md:w-40 p-2 px-3 rounded-full text-black font-bold text-center"
              >
                Subscribe
              </Link>
            </div>
            <div className="flex gap-5 text-base md:text-xl flex-wrap">
              <div className="flex items-center gap-2 text-md">
                <i class="fa-solid fa-eye"></i>
                <CountFormatter
                  count={videoInfo?.statistics?.viewCount}
                  name={""}
                />
              </div>
              <div className="flex items-center gap-2 text-md">
                <i class="fa-solid fa-thumbs-up"> </i>
                <CountFormatter
                  count={videoInfo?.statistics?.likeCount}
                  name={""}
                />
              </div>
              <div className="flex items-center gap-2 text-md">
                <i class="fa-solid fa-star"></i>
                <CountFormatter
                  count={videoInfo?.statistics?.favoriteCount}
                  name={""}
                />
              </div>
              <div className="flex items-center gap-2 text-md">
                <i class="fa-solid fa-comment"></i>
                <CountFormatter
                  count={videoInfo?.statistics?.commentCount}
                  name={""}
                />
              </div>
            </div>
          </div>

          {/* description section  */}
          <div className="my-5 p-3 w-72 lg:w-[800px] border-2 border-gray-600 rounded-2xl overflow-hidden">
            <p className="font-bold text-lg my-1">Description</p>
            <p>{videoInfo?.snippet?.description}</p>
          </div>

          {/* comment section  */}
          <CommentContainer videoId={videoId} />

          {/* Live chat section   */}
          <p className="font-bold text-xl">Live Chat</p>
          <LiveChat />
        </div>
      </div>

      <div className="">
        <SuggestedVideo />
      </div>
    </div>
  );
};

export default WatchVideoPage;
