import React, { useEffect, useState } from "react";
import { YOUTUBE_POPULAR_VIDEO_API } from "../constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import VideoCardShimmer from "./VideoCardShimmer";

const VideoContainer = () => {
  const [videoData, SetVideoData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getVideoData();
  }, []);

  const getVideoData = async () => {
    const videos = await fetch(YOUTUBE_POPULAR_VIDEO_API);
    const data = await videos.json();
    //console.log(data.items);
    SetVideoData(data?.items);
    setIsLoading(false);
  };

  return isLoading ? (
    <VideoCardShimmer />
  ) : (
    <div className="flex flex-wrap">
      {videoData.map((video) => {
        return (
          <Link key={video.id } to={"/watch?v=" + video.id}>
            <VideoCard videoInfo={video} />
          </Link>
        );
      })}
    </div>
  );
};

export default VideoContainer;
