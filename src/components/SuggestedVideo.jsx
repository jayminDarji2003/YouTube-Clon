import React, { useEffect, useState } from "react";
import { YOUTUBE_SUGGESTED_VIDEO_API } from "../constants";
import { Link } from "react-router-dom";

const SuggestedVideo = () => {
  const [SuggestedVideo, setSuggestedVideo] = useState([]);

  useEffect(() => {
    getSuggestedVideos();
  }, []);

  const getSuggestedVideos = async () => {
    const data = await fetch(YOUTUBE_SUGGESTED_VIDEO_API);
    const json = await data.json();
    //console.log(json.items);
    setSuggestedVideo(json?.items);
  };

  return (
    <div className="border-2 w-72 lg:w-full border-gray-600 p-1 lg:p-2 bg-black rounded-2xl ">
      <p className="text-2xl font-bold text-center mb-4">Suggested Videos</p>
      <div>
        {SuggestedVideo.map((info) => {
          return (
            <Link key={info?.id} to={"/watch?v=" + info.id}>
              <div className=" text-black lg:w-86 my-4 mx-2 flex border border-gray-600 items-center p-2 rounded-lg">
                <img
                  className="rounded-2xl h-20"
                  src={info?.snippet?.thumbnails?.default?.url}
                  alt=""
                />
                <div>
                  <p className="font-bold text-white text-md mx-2">
                    {info?.snippet?.title}
                  </p>
                  <p className="font-semibold text-white text-sm mx-2">
                    {info?.snippet?.channelTitle}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SuggestedVideo;
