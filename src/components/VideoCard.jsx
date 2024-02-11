import React from "react";
import CountFormatter from "./CountFormatter";

const VideoCard = ({ videoInfo }) => {
  const { snippet, statistics } = videoInfo;
  const { thumbnails, title, channelTitle } = snippet;

  return (
    <div className="border-2 text-white m-5 w-56 lg:w-72 rounded-lg">
      <img
        className="text-center rounded-lg hover:scale-105"
        src={thumbnails?.medium?.url}
        alt="Image"
      />
      <div className="p-3">
        <p className=" text-xl font-semibold">{title.slice(0, 35)}...</p>
        <p className="text-gray-300 text-sm font-bold my-1">{channelTitle}</p>
        <div className="text-gray-300 text-xs flex gap-4 my-1">
          <p>
            <CountFormatter count={statistics?.viewCount} name="Views" />
          </p>
          <p>
            <CountFormatter count={statistics?.likeCount} name="Likes" />
          </p>
          {/* <p>{statistics?.viewCount} Views</p>
          <p>.</p> */}
          {/* <p>{statistics?.likeCount} Likes</p> */}
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
